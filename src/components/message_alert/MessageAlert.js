import "./message-alert.scss";
import { useDispatch } from "react-redux";
import { closeCheckoutAlert } from "../../redux/actions/actions";
const MessegeAlert = () => {
  const dispatch = useDispatch();
  return (
    <div className="alert-messege-element">
      <div>
        <h5> Purchased Successfully... </h5>
        <button onClick={() => dispatch(closeCheckoutAlert())}>ok</button>
      </div>
    </div>
  );
};
export default MessegeAlert;