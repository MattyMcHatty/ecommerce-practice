import React from "react";

const Basket = ({products, onBasketToggle}) => {

    const  productsInBasket = products.filter(product => product.isInBasket);

    return(

        <>
        
        <h2> Basket </h2>
        <ul>
            {productsInBasket.map(product => {
                return(
                    <li key={product.id}>
                        {product.title} | £{product.price} 
                        <button onClick={() => onBasketToggle(product.id)}>Remove</button>
                    </li>
                )
            })}



        </ul>
        


        </>

    )


}

export default Basket;