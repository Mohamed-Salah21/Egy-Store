import "./style-nav.scss";
import { NavLink } from "react-router-dom";
const Nav2 = () => {
  return (
    <nav className="nav2">
      <div className="nav2-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </nav>
  );
};
export default Nav2;
