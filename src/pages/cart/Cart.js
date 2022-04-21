import React from "react";
import "./cart.scss";
import "./cart-media.scss";
import Items from "../../components/cart/Items";
import { useSelector } from "react-redux";
import OrderSummary from "../../components/cart/OrderSummary";
import MessageAlert from "../../components/message_alert/MessageAlert";
const CartItems = () => {
  const { cartItems, alert } = useSelector((state) => state);
  const { length } = cartItems.cart;
  return (
    <div className="cart-items-page">
      {alert.setting && <MessageAlert />}
      <div className="cart-items-container">
        {length === 0 ? (
          <h2 className="h2-no-items"> Your cart is empty </h2>
        ) : (
          <h2 className="h2-items">
            Your cart have {length === 1 ? "(1 item)" : `(${length} items)`}
          </h2>
        )}
        <div className="items-and-orderSummary">
          {length > 0 && (
            <div className="items">
              <Items />
            </div>
          )}
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};
export default CartItems;
