import React from 'react'
// child      
function Product(props) {
  return (
    <div className="product-card">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <h3>Rs. {props.price}</h3>
    </div>
  )
}

export default Product