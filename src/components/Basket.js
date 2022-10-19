import React from "react";
import styled from "styled-components";

const BasketItem = styled.li`
font-size: 1em;
color: #4d2600;
background-color: lightgrey;
display: flex;
justify-content: space-between;
padding: 0.2em;
`

const Button = styled.button`
font-size: 1em;
border: 1px solid #e60000;
background: #ff1a1a;
max-height:30px;
`

const BasketHead = styled.h2`
background-color: #00e6ac;
padding: 0.8em;
`

const Basket = ({products, onBasketToggle}) => {

    const  productsInBasket = products.filter(product => product.isInBasket);

    return(

        <>
        
        <BasketHead> Basket </BasketHead>
        <ul>
            {productsInBasket.map(product => {

                return(
                    <BasketItem key={product.id}>
                        {product.title} | £{product.price} 
                        <Button onClick={() => onBasketToggle(product.id)}>Remove</Button>
                    </BasketItem>
                )
            })}
            



        </ul>
        


        </>

    )


}

export default Basket;