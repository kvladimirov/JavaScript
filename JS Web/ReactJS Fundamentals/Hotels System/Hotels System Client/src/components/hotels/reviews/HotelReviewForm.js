import React from 'react'
import Input from '../../common/forms/Input'

const HotelReviewForm = (props) => (
  <form>
    <div>{props.error}</div>
    <Input
      name='rating'
      type='number'
      placeholder='Rating '
      value={props.review.rating}
      onChange={props.onChange} />
    <br />
    <Input
      name='comment'
      placeholder='Comment '
      value={props.review.comment}
      onChange={props.onChange} />
    <br />

    <input type='submit' onClick={props.onSave} />

  </form>
)

export default HotelReviewForm
