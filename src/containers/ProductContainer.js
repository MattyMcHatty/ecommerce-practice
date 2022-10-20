import React from "react"

import ProductList from "../components/ProductList";
import Basket from "../components/Basket";
import './ProductContainer.css'

const ProductContainer = ({products, HandleBasketToggle, totalCost}) => {

    return(
        <>
        <main>
            <ProductList products={products} onBasketToggle={HandleBasketToggle} />
        </main>
        <span>
            <Basket products={products} onBasketToggle={HandleBasketToggle} totalCost={totalCost} />
        </span>
        </>
        
        
    )


};

export default ProductContainer;