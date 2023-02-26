import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Button from 'react-bootstrap/Button';
import { ContextState } from '../context/Context';

export default function Header() {

  const {login, user}=ContextState();
  
  return (
    <div>
      <Link to="/">
        <div className='brandHeader'>
          Shop
        </div>
      </Link>
      {!login&&<Login/>}
      {login&&<div>{user.userName}</div>}
      <Link to="/checkout">
        <Button variant="dark">
            Checkout
        </Button>
      </Link>
    </div>
  )
}
