import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import ProductDetails from "./Pages/ProductDetails"
import ProductByCategory from './Pages/ProductByCategory'
import dummydata from "./Pages/dummydata"

function App() {
  const [products, setProducts] = useState(dummydata);

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home  products = {products} />}/>
        <Route path='/product-details/:id' element={<ProductDetails products={products} />}/>
        <Route path='/product-by-category/:category' element={<ProductByCategory products={products} />}/>

       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
