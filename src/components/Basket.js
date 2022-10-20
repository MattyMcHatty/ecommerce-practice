import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const BasketItem = styled.li`
font-size: 1em;
color: #4d2600;
background-color: lightgrey;
display: flex;
justify-content: space-between;
padding: 0.2em;
`

const Button = styled.button`
box-shadow:inset 0px 1px 0px 0px #cf866c;
	background:linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
	background-color:#d0451b;
	border-radius:8px;
	border:2px solid #942911;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:5px 7px;
	text-decoration:none;
	text-shadow:0px 1px 0px #854629;

&:hover {
	background:linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
	background-color:#bc3315;
    color: black;
}
&:active {
	position:relative;
	top:1px;
}
`
const Total = styled.p`
font-size:1.5em;
background-color: #00e6ac;
padding: 0.8em;
`

const BasketHead = styled.h2`
background-color: #00e6ac;
padding: 0.8em;
a:visited {color: black}
a:hover {color: #996600}
`

const Basket = ({products, onBasketToggle, totalCost}) => {

    const  productsInBasket = products.filter(product => product.isInBasket);

    return(

        <>
        
        <BasketHead> <Link to="/basket">Basket</Link> </BasketHead>
        <ul>
            {productsInBasket.map(product => {
                totalCost = totalCost + product.price;


                return(
                    <BasketItem key={product.id}>
                        {product.title} | £{product.price} 
                        <Button onClick={() => onBasketToggle(product.id)}>Remove</Button>
                    </BasketItem>
                )
            })}

        </ul>

        <Total> Total Cost: £ {totalCost} </Total>
        


        </>

    )


}

export default Basket;