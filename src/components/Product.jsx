import React from 'react'
import { Link } from 'react-router-dom'
function Product({ item }) {
  const image = item.images["1"];
  return (
    <>
      <Link to={`/product-details/${item.id}`} className='Product_details'>
        <div className="product__item">
          <div className="product_img">
            <img src={image} alt="Not found" />
          </div>
          <p className="product__title">{item.title}</p>
          <p className="product__description">{item.description}</p>
          <div className="price__tags">
            <span className="product__price"> {item.price.amount1} </span>
            <span className="product__price"> {item.price.amount2} </span>
            <span className="product__price"> {item.price.amount3} </span>
          </div>
        </div></Link>
    </>
  )
}

export default Product