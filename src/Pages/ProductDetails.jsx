import React from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/Header";
import ImageSlider from '../components/imageSlider';
import ProductInfo from "../components/ProductInfo"

function ProductDetails({ products }) {
    const { id } = useParams();

    const product = products.find(product => {
        if (product.id == id) {
            return product
        }
    })
    return (
        <>
            <Header products={products} />
            <div className="product__container">
                <div className="products__content">
                    <ImageSlider key={product.id} images={product.images} />
                    <ProductInfo key={product.id} product={product} />
                </div>
            </div>

        </>
    )
}

export default ProductDetails