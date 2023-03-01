import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/productDetail/ProductDetails";
import Footer from "./components/footer/Footer";
import Collection from "./pages/collection/Collection";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/categorySlice";
import { useEffect } from "react";
import Payments from "./components/payments/Payments";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId?" element={<Collection />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/payments/:status" element={<Payments />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
