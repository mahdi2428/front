import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Products from "./pages/products";
import { AuthProvider } from "./context/AuthContext";


export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={
          
            <Home />
          
        } />
        
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}