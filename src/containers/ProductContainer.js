import React from "react"

import ProductList from "../components/ProductList";
import Basket from "../components/Basket";
import './ProductContainer.css'

const ProductContainer = ({products, HandleBasketToggle}) => {

    return(
        <>
        <main>
            <ProductList products={products} onBasketToggle={HandleBasketToggle} />
        </main>
        <span>
            <Basket products={products} onBasketToggle={HandleBasketToggle} />
        </span>
        </>
        
        
    )


};

export default ProductContainer;