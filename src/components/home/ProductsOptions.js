import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleChange } from "../../redux/actions/actions";
const ProductsOptions = () => {
  const { selectedValue, selectValues } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <select
      defaultValue={selectedValue.val}
      onChange={(e) => dispatch(handleChange(e.target.value))}
    >
      {selectValues.map((item) => (
        <option key={item.id} value={item.option}>
          {item.option}
        </option>
      ))}
    </select>
  );
};
export default ProductsOptions;
