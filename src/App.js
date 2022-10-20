import './App.css';
import React, {useState, useEffect} from "react";


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductContainer from './containers/ProductContainer';
import BasketDetail from './components/BasketDetail';

function App() {

  const [products, setProducts] = useState([]);
  const [discountCode, setDiscountCode] = useState("");

  var totalCost = 0;


  useEffect(() => {
      getProducts()
  }, [])

  const getProducts = () => {
      fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }



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

  return (
    <div className="App">
      <img className="shop-logo" src="https://cdn.shopify.com/s/files/1/1644/6687/files/007_store_logo_762a914a-736a-49dc-93ed-cb8490882f6c_1600x.png?v=1646933359" alt="" height="100"></img>

      <Router>
            <NavBar />

            <Routes>
                <Route exact path="/" element={<ProductContainer products={products} HandleBasketToggle={HandleBasketToggle} totalCost={totalCost} />} />
                <Route exact path="/basket" element={<BasketDetail products={products} onBasketToggle={HandleBasketToggle} checkoutBasket={checkoutBasket} handleChange={handleChange} discountCode={discountCode} totalCost={totalCost}/>} />
            </Routes>
        </Router>

      
    </div>
  );
}

export default App;
