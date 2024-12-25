import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegistrationForm from "./components/UserRegistration/Signup";
import ProductListing from "./pages/ProductListing.JSX";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import ProductModal from "./components/ProductModal/ProductModal";
import Signup from "./components/UserRegistration/Signup";
import { useState } from "react";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <>
      <Router>
        <Header cartCount={cartCount} />
        <Routes>
          {/* <Route
            path="/"
            element={<ProductListing addToCart={addToCart} />}
          ></Route> */}
          <Route
            path="/"
            element={<ProductPage addToCart={addToCart} />}
          ></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
