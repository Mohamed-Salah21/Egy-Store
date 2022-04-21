import React from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "./product-details.scss";
import "./product-details-media.scss";
import { addToCart } from "../../redux/actions/actions";
const ProductDetails = () => {
  const { products, cartItems } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products[id - 1];
  const { name, image, price, description, type } = product;
  const productInCart = cartItems.cart.find((item) => item.id === product.id);
  return (
    <div className="product-details-page">
      <div className="product-details-container">
        <img src={image} alt={name} />
        <div className="details">
          <h3 className="type"> {type} </h3>
          <h3 className="name"> {name} </h3>
          <h3 className="price"> {price.toLocaleString()} EGP </h3>
          <div className="button-element">
            <button
              className={`${productInCart && "dis-active"} `}
              onClick={() => !productInCart && dispatch(addToCart(product))}
            >
              add to cart
            </button>
          </div>
          <article> {description} </article>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
