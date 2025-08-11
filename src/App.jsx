import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetching from "./pages/Fetching";
import Category from "./pages/Category";
import About from "./pages/About";
import TopNavbar from "./components/TopNavbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fetching-test" element={<Fetching />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
