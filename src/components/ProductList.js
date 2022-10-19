import React from "react";
import styled from "styled-components"

const Product = styled.li`
font-size: 1.2em;
padding: 1em;
margin: 1em;
border: 2px solid #006666;
border-radius: 0.5em;
display: flex;
justify-content: space-between;
`
const Button = styled.button`
max-height:30px;
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
	        top:1px;}`

const ProductList = ({products, onBasketToggle}) => {

    const productList = products.map((product) => {

        const handleClick = event => {
            onBasketToggle(product.id)
        }

        const basketText = product.isInBasket ? 'Remove' : 'Add'

        return (<Product key={product.id} value={product.id}><img src={product.image} alt="" width="100" height="100"></img> {product.title}
                <br></br>£ {product.price}
        
                <Button onClick={handleClick}>{basketText}</Button>

                </Product>)

    })

    return(
        <ul>
            {productList}
        </ul>
    )

}

export default ProductList;