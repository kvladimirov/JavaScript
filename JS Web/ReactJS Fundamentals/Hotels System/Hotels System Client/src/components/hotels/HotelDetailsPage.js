import React from 'react'
import hotelActions from '../../actions/HotelActions'
import HotelStore from '../../stores/HotelStore'
import HotelReviews from './reviews/HotelReviews'

export default class HotelDetailsPage extends React.Component {
  constructor (props) {
    super(props)

    const id = this.props.match.params.id

    this.state = {
      id,
      hotel: {}
    }

    this.handleHotelsRetrieved = this.handleHotelsRetrieved.bind(this)

    HotelStore.on(
      HotelStore.eventTypes.HOTEL_DETAILS_RETRIEVED,
      this.handleHotelsRetrieved
    )
  }

  componentDidMount () {
    hotelActions.byId(this.state.id)
  }

  componentWillUnmount () {
    HotelStore.removeListener(
        HotelStore.eventTypes.HOTEL_DETAILS_RETRIEVED,
        this.handleHotelsRetrieved
     )
  }

  handleHotelsRetrieved (hotel) {
    this.setState({hotel})
  }

  render () {
    const hotel = this.state.hotel
    return (
      <div>
        <h1>{hotel.name} - {hotel.location}</h1>
        <h3>{hotel.numberOfRooms} rooms - {hotel.parkingSlots} parking slots</h3>
        <div className='hotel-details'><img src={hotel.image} alt={hotel.description} /></div>
        <HotelReviews hotelId={this.state.id} />
      </div>
    )
  }
}
