import React from "react";
import "./home-page.scss";
import "./home-page-media.scss";
import { useDispatch, useSelector } from "react-redux";
import { largeScreen, smallScreen } from "../../redux/actions/actions";
import HomeProducts from "../../components/home/HomeProducts";
import ProdductsOptions from "../../components/home/ProductsOptions";
const HomePage = () => {
  const { fullScreen, selectedValue } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="homePage">
      <div className="homePage-container">
        <div className="grid-select">
          <button
            className={!fullScreen && "colored"}
            onClick={() => dispatch(smallScreen())}
          >
            <i className="fas fa-grip-vertical"></i>
          </button>
          <button
            className={fullScreen && "colored"}
            onClick={() => dispatch(largeScreen())}
          >
            <i className="fas fa-th"></i>
          </button>
          <ProdductsOptions />
        </div>
        <div className="products">
          {selectedValue.val === "all" ? (
            <h2 className="select-h2"> All products </h2>
          ) : (
            <h2 className="select-h2"> {selectedValue.val} </h2>
          )}
          <div
            className={` products-container  ${
              fullScreen ? "full" : "not-full"
            }`}
          >
            <HomeProducts />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
