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
font-size: 1.2em;
border: 1px solid #81ce51;
background: #deffca;
max-height:30px;`

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