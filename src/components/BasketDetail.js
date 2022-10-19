import React from "react";

const BasketDetail = ({products, onBasketToggle}) =>{

    const  productsInBasket = products.filter(product => product.isInBasket);

    return(

        <>
        
        <h2> Basket </h2>
        <ul>
            {productsInBasket.map(product => {
                return(
                    <li key={product.id}>
                        <ul>
                            <li>{product.title}</li>
                            <li>£{product.price}</li>
                            <li><img src={product.image} alt="" width="100" height="100"></img></li>
                            <li>{product.description}</li>
                            <li>{product.category}</li>
                        </ul>
                        <button onClick={() => onBasketToggle(product.id)}>Delete</button>
                    </li>
                )
            })}



        </ul>
        


        </>

    )

}

export default BasketDetail;