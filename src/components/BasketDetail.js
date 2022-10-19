import React from "react";

const BasketDetail = ({products, onBasketToggle, checkoutBasket, handleChange, discountCode}) =>{

    const  productsInBasket = products.filter(product => product.isInBasket);

    var totalCost = 0;
    var discountMultiplier = 1;

        const handleSubmit = (event) => {
            event.preventDefault();
        }

        if(discountCode === "CODEBOY"){
            discountMultiplier = 0.9;
        } 


    return(
        

        
        <>
        
        <h2> Basket </h2>
        <ul>
            {productsInBasket.map(product => {
                totalCost = totalCost + product.price;

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

        
        <p>Total Cost: £ {totalCost * discountMultiplier}</p>
        
        <form onSubmit={handleSubmit}>
        <input type="text" name="discountCode" value={discountCode} placeholder="Discount code?" onChange={handleChange}></input>
        </form>
        <button onClick={checkoutBasket}>Checkout</button>


        </>

    )

}

export default BasketDetail;