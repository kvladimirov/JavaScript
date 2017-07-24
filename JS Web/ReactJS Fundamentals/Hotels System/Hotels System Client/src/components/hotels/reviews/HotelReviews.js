import React from 'react'
import HotelReviewForm from './HotelReviewForm'
import hotelActions from '../../../actions/HotelActions'
import HotelStore from '../../../stores/HotelStore'
import FormHelpers from '../../common/forms/FormHelpers'
import toastr from 'toastr'

export default class HotelReviews extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      newReview: {
        rating: 0,
        comment: ''
      },
      reviews: [],
      error: ''
    }

    this.handleReviewsRetrieved = this.handleReviewsRetrieved.bind(this)
    this.handleReviewsAdded = this.handleReviewsAdded.bind(this)

    HotelStore.on(
      HotelStore.eventTypes.REVIEWS_RETRIEVED,
      this.handleReviewsRetrieved
    )

    HotelStore.on(
      HotelStore.eventTypes.REVIEW_ADDED,
      this.handleReviewsAdded
    )
  }

  componentDidMount () {
    hotelActions.allReviews(this.props.hotelId)
  }

  componentWillUnmount () {
    HotelStore.removeListener(
        HotelStore.eventTypes.REVIEWS_RETRIEVED,
        this.handleReviewsRetrieved
    )

    HotelStore.removeListener(
        HotelStore.eventTypes.REVIEW_ADDED,
        this.handleReviewsAdded
    )
  }

  handleReviewsRetrieved (reviews) {
    this.setState({ reviews })
  }

  handleReviewsAdded (data) {
    if (!data.success) {
      let error = FormHelpers.getFirstError(data)
      this.setState({ error })
    } else {
      const reviews = this.state.reviews
      reviews.push(data.review)
      this.setState({reviews})
      toastr.success(data.message)
    }
  }

  handleReviewsChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'newReview')
  }

  handleReviewsSave (event) {
    event.preventDefault()

    const rating = parseInt(this.state.newReview.rating, 10)

    if (!rating || rating < 1 || rating > 5) {
      this.setState({
        error: 'Rating must be between 1 and 5'
      })
      return
    }

    hotelActions.addReview(this.props.hotelId, this.state.newReview)
  }
  render () {
    let reviews = ''
    if (this.state.reviews.length > 0) {
      reviews = this.state.reviews.map((review, index) => (
        <div key={index}>{review.user} {review.rating} {review.comment}</div>
      ))
    }
    return (
      <div>
        <h4>Share Your Opinion</h4>
        <HotelReviewForm
          review={this.state.newReview}
          error={this.state.error}
          onChange={this.handleReviewsChange.bind(this)}
          onSave={this.handleReviewsSave.bind(this)} />
        <br />
        <div>
          {reviews}
        </div>
      </div>
    )
  }
}
