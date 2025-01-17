import React from 'react'
import Product from '../Components/Product';
import { useParams } from 'react-router-dom';

function ProductCards({ products }) {
    let { category } = useParams();
    return (
        <>
            {console.log(category, "category")}

            {category && category.length > 0 ?
                <div className="products__content">
                    {products.map(item => {
                        if (item.category == category) {
                            return <Product key={item.id} item={item} />
                        }
                    })}
                </div> : <div className="products__content">
                    {products.map(item => {
                        return <Product key={item.id} item={item} />
                    })}
                </div>
            }
        </>
    )
}

export default ProductCards