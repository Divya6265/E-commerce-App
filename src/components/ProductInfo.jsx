import React from 'react'

function ProductInfo({ product }) {
    return (
        <>
            <div className="product__item">
                <p className="product__title">{product.title}</p>
                <p className="product__description">{product.description}</p>
                <div className="price__tags">
                    <span className="product__price"> {product.price.amount1} </span>
                    <span className="product__price"> {product.price.amount2} </span>
                    <span className="product__price"> {product.price.amount3} </span>
                </div>
            </div>
        </>
    )
}

export default ProductInfo