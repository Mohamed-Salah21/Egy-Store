import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/actions/actions";
const Items = () => {
  const { cartItems } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      {cartItems.cart.map((item) => {
        return (
          <div className="item" key={item.name}>
            <Link to={`/products/${item.id}`}>
              <img src={item.image} alt="img" />
            </Link>
            <div className="name-and-price">
              <h4> {item.name} </h4>
              <h4> EGP {item.price.toLocaleString()}</h4>
            </div>
            <button
              className="moving-to-trash"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <i class="far fa-trash-alt"></i>
            </button>
            <div className="quantity">
              <button
                className={` ${item.quantity === 1 && "dis-active"} `}
                onClick={() => dispatch(decrementQuantity(item))}
              >
                -
              </button>
              <span> {item.quantity} </span>
              <button
                className={`${item.quantity === 7 && "dis-active"}`}
                onClick={() => dispatch(incrementQuantity(item))}
              >
                +
              </button>
            </div>
            <div className="sub-total">
              <span>EGP {item.price * item.quantity} </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Items;
