import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutAlert } from "../../redux/actions/actions";
const OrderSummary = () => {
  const { cartItems } = useSelector((state) => state);
  const { length } = cartItems.cart;
  const deliveryService = 50;
  const dispatch = useDispatch();
  const totalPrices = cartItems.cart.reduce(
    (price, item) => price + item.price * item.quantity,
    0
  );
  return (
    <>
      {length > 0 && (
        <div className="order-summary-outer">
          <div className="order-summary">
            <h3> order summary </h3>
            <div className="order-summary-inner-container">
              <div className="span-tags">
                <span>Subtotal</span>
                <span>EGP {totalPrices.toLocaleString()}</span>
              </div>
              <div className="span-tags">
                <span>Delivery</span>
                <span>EGP {deliveryService}</span>
              </div>
              <div className="order-total">
                <span>Order Total</span>
                <span>
                  EGP {(totalPrices + deliveryService).toLocaleString()}
                </span>
              </div>
              <button onClick={() => dispatch(setCheckoutAlert())}>
                checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default OrderSummary;
