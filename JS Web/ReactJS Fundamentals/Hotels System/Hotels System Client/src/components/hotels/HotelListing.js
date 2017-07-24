import React from 'react'
import { Link } from 'react-router-dom'

const HotelListing = (props) => (
  <li className='hotel-listing'>
    <img src={props.image} alt={props.name + ' hotel'} />
    <br />
    <span>{props.name}</span>
    <br />
    <Link to={`/hotels/details/${props.id}`}>More details</Link>
  </li>
)

export default HotelListing
