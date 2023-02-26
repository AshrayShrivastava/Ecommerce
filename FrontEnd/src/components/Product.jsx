import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { ContextState } from '../context/Context';
import axios from "axios";

export default function Product(props){
  const {login, user}=ContextState();
  const { id, name, price, quantity} = props.data;

  const addToCart =()=>{
    if(login){
      const request = {
        "userId":user.userId,
        "itemId":id,
        "quantity": cartQuantity
      }
      axios.post('addtocart', request);
      handleChangeQuantity(0);
    }
    
  }

  const handleChangeQuantity =(newQuantity)=>{
    if(newQuantity>=0 && newQuantity<=quantity){
      setCartQuantity(newQuantity);
    }
  }
  
  const [cartQuantity, setCartQuantity]= useState(0);

  return (
    <div className="product">
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <div>
        <div>{cartQuantity}</div>
        <Button variant="light" onClick={()=>handleChangeQuantity(cartQuantity+1)}>+</Button>
        <Button variant="light" onClick={()=>handleChangeQuantity(cartQuantity-1)}>-</Button>
      </div>
      <Button variant="success" onClick={() => addToCart()}>
        Add To Cart 
      </Button>
    </div>
  );
};