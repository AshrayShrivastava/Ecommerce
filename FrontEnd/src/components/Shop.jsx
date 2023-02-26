import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';

export default function Shop() {
  const [products, setProducts] =useState([])
  useEffect(()=>{
    axios.get('getallitem').then(data=>{setProducts(data.data)})
  },[])

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  )
}
