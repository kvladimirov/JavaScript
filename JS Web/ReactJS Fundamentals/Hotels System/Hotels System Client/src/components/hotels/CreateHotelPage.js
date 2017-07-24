import React, { Component } from 'react'
import CreateHotelForm from './CreateHotelForm'
import FormHelpers from '../common/forms/FormHelpers'
import hotelActions from '../../actions/HotelActions'
import hotelStore from '../../stores/HotelStore'
import toastr from 'toastr'

class CreateHotelPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hotel: {
        name: 'My hotel',
        location: 'Sofia',
        description: 'The best hotel in the world',
        numberOfRooms: 150,
        image: 'http://spa-hoteli.eu/wp-content/uploads/2016/11/besthotelsites-1.jpg',
        parkingSlots: 100
      },
      error: ' '
    }

    this.handleHotelCreated = this.handleHotelCreated.bind(this)

    hotelStore.on(
        hotelStore.eventTypes.HOTEL_CREATED,
        this.handleHotelCreated
    )
  }

  componentWillUnmount () {
    hotelStore.removeListener(
        hotelStore.eventTypes.HOTEL_CREATED,
        this.handleHotelCreated
     )
  }

  handleHotelCreated (data) {
    if (!data.success) {
      let error = FormHelpers.getFirstError(data)
      this.setState({ error })
    } else {
      const id = data.hotel.id
      toastr.success(data.message)
      this.props.history.push(`/hotels/details/${id}`)
    }
  }

  handleHotelChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'hotel')
  }

  handleHotelSave (event) {
    event.preventDefault()

    let formIsValid = true
    let error = ' '

    if (!this.state.hotel.name) {
      error = 'Name is required'
      formIsValid = false
    }

    if (!this.state.hotel.location) {
      error = 'Location is required'
      formIsValid = false
    }

    if (!this.state.hotel.description) {
      error = 'Description is required'
      formIsValid = false
    }

    if (this.state.hotel.numberOfRooms === 0) {
      error = 'Number Of Rooms must be a positive number'
      formIsValid = false
    }

    if (!this.state.hotel.image) {
      error = 'Image is required'
      formIsValid = false
    }

    if (!formIsValid) {
      this.setState({ error })
      return
    }

    hotelActions.createHotel(this.state.hotel)
  }

  render () {
    return (
      <div>
        <h1>Create Hotel</h1>
        <CreateHotelForm
          hotel={this.state.hotel}
          error={this.state.error}
          onChange={this.handleHotelChange.bind(this)}
          onSave={this.handleHotelSave.bind(this)}
         />
      </div>
    )
  }
}

export default CreateHotelPage
