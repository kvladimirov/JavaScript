import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <header>
        <Link to='/'>Books Blog</Link>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/books/all'>All books</Link>
            </li>
            <li>
              <Link to='/authors/all'>All authors</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
