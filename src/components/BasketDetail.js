import React from "react";
import styled from "styled-components";

const BasketItem = styled.li`
font-size: 1em;
color: #4d2600;
background-color: lightgrey;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 1em;
padding-right: 1em;
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
	padding:10px 14px;
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

const BasketHead = styled.h2`
background-color: #00e6ac;
padding: 0.8em;
`

const Total = styled.p`
font-size:1.5em;
background-color: #00e6ac;
padding: 0.8em;
`

const DiscountCode = styled.input`
font-size: 2em;
border: 1px solid darkgrey;
background: lightgrey;
max-height:30px;
padding: 0.3em;
margin: 0.4em;
`

const CheckoutButton = styled.button`
	box-shadow:inset 0px 1px 0px 0px #d9fbbe;
	background:linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%);
	background-color:#b8e356;
	border-radius:6px;
	border:1px solid #83c41a;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #86ae47;
    &:hover{background:linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
	        background-color:#a5cc52;
            color: black;
        }
    &:active {position:relative;
	        top:1px;}
`

const BasketDetail = ({products, onBasketToggle, checkoutBasket, handleChange, discountCode, totalCost}) =>{

    const  productsInBasket = products.filter(product => product.isInBasket);

    // var totalCost = 0;
    var discountMultiplier = 1;
    var discountMessage = "No Discount Code or Not Valid"

        const handleSubmit = (event) => {
            event.preventDefault();
        }

        if(discountCode.toLowerCase() === "codeboy"){
            discountMultiplier = 0.9;
            discountMessage = "CODEBOY is Valid for 10% Off!"
        } 


    return(
        

        
        <>
        
        <BasketHead> Basket </BasketHead>
        <ul>
            {productsInBasket.map(product => {
                totalCost = totalCost + product.price;

                return(
                    <BasketItem key={product.id}>
                        
                            {product.title}  |  £{product.price}
                            <img src={product.image} alt="" width="100" height="100"></img>

                
                        <Button onClick={() => onBasketToggle(product.id)}>Delete</Button>
                    </BasketItem>
                )
            })}
        </ul>

        
        <Total>Total Cost: £ {totalCost * discountMultiplier}</Total>
        {discountMessage}
        
        <form onSubmit={handleSubmit}>
        <DiscountCode type="text" name="discountCode" value={discountCode} placeholder="Discount code?" onChange={handleChange}></DiscountCode>
        </form>
        <CheckoutButton onClick={checkoutBasket}>Checkout</CheckoutButton>


        </>

    )

}

export default BasketDetail;