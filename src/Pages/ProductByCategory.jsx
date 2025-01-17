import React from 'react'
import ProductCards from '../components/ProductCards'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
function ProductByCategory({products}) {
  const {category} = useParams();
  return (
    <>
    <Header products={products}/>
    <h1>{category}</h1>
    <ProductCards products={products}/>
    </>
  )
}

export default ProductByCategory