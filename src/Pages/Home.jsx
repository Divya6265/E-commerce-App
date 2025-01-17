import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import ProductCards from '../components/ProductCards';
function Home({products}) {

  return (
    <>
     <Header products={products} />
     
      <section className='products'>
       
        <h1>Pickles</h1>
       < ProductCards products={products} />
        <h1>Powers</h1>
        < ProductCards products={products} />

      </section>

    </>
  )
}

export default Home