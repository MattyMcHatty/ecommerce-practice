import './App.css';
import React, {useState, useEffect} from "react";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductContainer from './containers/ProductContainer';
import BasketDetail from './components/BasketDetail';

function App() {

  const [products, setProducts] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  // const [selectedProductID, setSelectedProductID] = useState("");

  useEffect(() => {
      getProducts()
  }, [])

  const getProducts = () => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }

  // const productSelected = id => {
  //     setSelectedProduct(id);
  // }

  const handleChange = (event) => {
    event.preventDefault();
    setDiscountCode(event.target.value);
  }

  const HandleBasketToggle = (id) => {
      const updatedProducts = products.map((product) => {
          return product.id === id
              ? {...product, isInBasket: !product.isInBasket} : product
      })
      setProducts(updatedProducts);
  }

  const checkoutBasket = () => {
    const updatedProducts = products.map((product) => {
        return {...product, isInBasket: false}
    })
    setProducts(updatedProducts)
  }

  // const selectedProduct = products.find(product => product.id === selectedProductID)

  return (
    <div className="App">
      <img src="https://img.freepik.com/premium-vector/vintage-clothing-store-logo-design-template-vector-illustration_500223-479.jpg?w=2000" alt="" height="200"></img>

      <Router>
            <NavBar />

            <Routes>
                <Route exact path="/" element={<ProductContainer products={products} HandleBasketToggle={HandleBasketToggle} />} />
                <Route exact path="/basket" element={<BasketDetail products={products} onBasketToggle={HandleBasketToggle} checkoutBasket={checkoutBasket} handleChange={handleChange} discountCode={discountCode}/>} />
            </Routes>
        </Router>

      
    </div>
  );
}

export default App;
