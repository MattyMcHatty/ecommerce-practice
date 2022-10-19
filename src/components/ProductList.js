import React from "react";

const ProductList = ({products, onBasketToggle}) => {

    // const handleClick = event => {
    //     onBasketToggle(product.id)
    // }

    // const basketText = product.isInBasket ? 'Remove from Basket' : 'Add to Basket'

    const productList = products.map((product) => {

        const handleClick = event => {
            onBasketToggle(product.id)
        }

        const basketText = product.isInBasket ? 'Remove from Basket' : 'Add to Basket'

        return (<li key={product.id} value={product.id}>{product.title}
        
                <button onClick={handleClick}>{basketText}</button>

                </li>)

    })

    return(
        <ul>
            {productList}
        </ul>
    )

}

export default ProductList;