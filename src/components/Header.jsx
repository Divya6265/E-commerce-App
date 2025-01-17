import React,{useState, useEffect} from 'react'
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Product from '../components/Product';
import { Link } from 'react-router-dom';

function Header({products}) {
  console.log(products, "header")
const logo = "/logo.png"
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  
     const handleSideBar = () => {
        setSideBarVisible(!sideBarVisible);
      }
      const handleShowSearch = () => {
        setShowSearchForm(!showSearchForm);
      }
      const handleSearch = () => {
        setSearchProduct("");
      }
      const [searchProduct, setSearchProduct] = useState("");
      const [filteredProducts, setfilteredProducts] = useState([]);
     
      useEffect(() => {
        if(searchProduct.length>0){
          const filteredProducts = products.filter( product => 
            product.title.toLowerCase().includes(searchProduct.toLowerCase())
          );
          setfilteredProducts(filteredProducts);
        }else{
          setfilteredProducts([])
        }
      },[searchProduct])
  return (
    <section className='top__settings'>
    <header className='header'>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p>Welcome to <span>VRS Pickels</span> </p>
          </div>
          <div className="carousel-item">
            <p>100% Natural, No Preservatives Added!</p>
          </div>
          <div className="carousel-item">
            <p>We are shipping to India, US, Australia, and beyond.</p>
          </div>
        </div>
      </div>
    </header>
    <div className="sub__header">

      <div className="bars_" onClick={handleSideBar}><FaBars /></div>

      <div className={`sidebar__menu ${sideBarVisible ? 'visible' : 'hidden'}`}>
        <div className="sidebar__">
          <div className="close__icon" onClick={handleSideBar}><FaBars /></div>
          <Link to="/" ><li className="sidebar__item">Home</li></Link>
          <Link to="/product-by-category/Non Veg Pickles" className="sidebar__item"><li >Non Veg Pickles</li></Link>
           <Link to="/product-by-category/Veg Pickles" className="sidebar__item"><li >Veg Pickles</li></Link>
           <Link to="/product-by-category/Powders" className="sidebar__item"><li >Powders</li></Link>
           <Link to="/product-by-category/Snackz" className="sidebar__item"><li >Snackz</li></Link>
        </div>
      </div>

      <div className="logo">
        <img src={logo} alt="not found" className='logo__img' />
      </div>
      <div className="search__icon"> <IoSearch onClick={handleShowSearch} /> </div>

    </div>
    {showSearchForm ?
      <form className='search__product'>
        <div className="search_wrapper">
          <div className="innersearch__icon"> <IoSearch /></div>
          <input type="text" name="product" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} autoComplete='off' id="product" />
          {searchProduct.length > 0 ? <div className="removesearch__icon"> <IoSearch onClick={handleSearch} /></div> : null}
        </div>
      </form> : null}

      {searchProduct.length>0 ? <h4 className='search_results' >Search results for {searchProduct}</h4> :null}
      {searchProduct.length > 0 && filteredProducts.length==0 ?   <h6 className='search_results'>Sorry to say no results found </h6> : null }
        <div className="products__content searched__product">
          {filteredProducts.length>0 ?  filteredProducts.map(item => {
              return <Product key={item.id} item={item} />
          }) : null}
        </div>
  </section>
  
  )
}

export default Header