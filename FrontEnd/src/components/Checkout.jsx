import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ContextState } from '../context/Context';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export default function Checkout() {
  const {user, login}=ContextState();
  const [items, setItems]=useState([]);
  const [coupon, setCoupon]=useState("");
  const [message, setMessage]=useState("")

  useEffect(()=>{
    axios.get(`getcart?userId=${user.userId}`).then(data=>{
      const cart = data.data;
      for(let k in cart){
        setItems([...items, {"key":k, "quantity":cart[k]}]);
      }
    })
    items.map((i)=>{
      console.log(i["key"]);
    })
  },[message])

  const placeOrder=()=>{
    const request = {
      "user_id":user.userId,
      "coupon_code": coupon
    }
    axios.post('placeorder', request)
    .then(response => {
      setMessage(response.data)
      console.log(response.data)
    });
  }

  return (
    <div>
      {login&&<div>
      checkout
      {items.map((item) => (
        <div className="user" key={item.key}>
          item_id: {item.key}  quantity: {item.quantity}
        </div>
      ))}
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          CouponCode
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setCoupon(e.target.value)}
        />
      </InputGroup>
      <Button variant="success" onClick={() => placeOrder()}>
        Place Order 
      </Button>
      {message}
      </div>}
    </div>
  )
}
