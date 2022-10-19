import React from "react"

import ProductList from "../components/ProductList";
import Basket from "../components/Basket";

const ProductContainer = ({products, HandleBasketToggle}) => {

    // const [products, setProducts] = useState([]);
    // // const [selectedProductID, setSelectedProductID] = useState("");

    // useEffect(() => {
    //     getProducts()
    // }, [])

    // const getProducts = () => {
    //     fetch("https://fakestoreapi.com/products")
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }

    // // const productSelected = id => {
    // //     setSelectedProduct(id);
    // // }

    // const HandleBasketToggle = (id) => {
    //     const updatedProducts = products.map((product) => {
    //         return product.id === id
    //             ? {...product, isInBasket: !product.isInBasket} : product
    //     })
    //     setProducts(updatedProducts);
    // }

    // // const selectedProduct = products.find(product => product.id === selectedProductID)

    return(
        <>

        <ProductList products={products} onBasketToggle={HandleBasketToggle} />
        <Basket products={products} onBasketToggle={HandleBasketToggle} />
        
        </>
    )


};

export default ProductContainer;