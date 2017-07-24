import React from 'react'
import Input from '../common/forms/Input'

const CreateHotelForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='name'
      placeholder='Name:'
      value={props.hotel.name}
      onChange={props.onChange} />
    <br />

    <Input
      name='location'
      placeholder='Location:'
      value={props.hotel.location}
      onChange={props.onChange} />
    <br />

    <Input
      name='description'
      placeholder='Description:'
      value={props.hotel.description}
      onChange={props.onChange} />
    <br />

    <Input
      type='number'
      name='numberOfRooms'
      placeholder='Number of Rooms:'
      value={props.hotel.numberOfRooms}
      onChange={props.onChange} />
    <br />

    <Input
      name='image'
      placeholder='Image:'
      value={props.hotel.image}
      onChange={props.onChange} />
    <br />

    <Input
      type='number'
      name='parkingSlots'
      placeholder='Parking Slots:'
      value={props.hotel.parkingSlots}
      onChange={props.onChange} />
    <br />

    <input type='submit' onClick={props.onSave} />

  </form>
)

export default CreateHotelForm
