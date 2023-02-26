import React, { useContext, useState } from "react";

export default function Product(props){
  console.log(props);
  const { id, name, price} = props.data;

  const addToCart =(id)=>{

  }
  
  const [quantity, setQuantity]= useState(0);

  return (
    <div className="product">
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart 
      </button>
      <div>{quantity}</div>
    </div>
  );
};