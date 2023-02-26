import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Button from 'react-bootstrap/Button';

export default function Header() {
  return (
    <div>
      <Link to="/">
        <div className='brandHeader'>
          Shop
        </div>
      </Link>
      <Login/>
      <Link to="/checkout">
        <Button variant="dark">
            Checkout
        </Button>
      </Link>
    </div>
  )
}
