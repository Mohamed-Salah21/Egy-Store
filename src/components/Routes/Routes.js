import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home_page/HomePage";
import CartItemsPage from "../../pages/cart/Cart";
import ProductsDetails from "../../pages/product_details/ProductDetails";
import ScrollingToTop from "../../ScrollToTop";
const RoutesLinks = () => {
  return (
    <>
      <ScrollingToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartItemsPage />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </>
  );
};
export default RoutesLinks;
