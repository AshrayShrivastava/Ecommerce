import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';

export default function Product(props){
  console.log(props);
  const { id, name, price, quantity} = props.data;

  const addToCart =(id)=>{

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
      <button onClick={() => addToCart(id)}>
        Add To Cart 
      </button>
    </div>
  );
};