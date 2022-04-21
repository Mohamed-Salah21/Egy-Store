import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const HomeProducts = () => {
  const { products, selectValues, selectedValue } = useSelector(
    (state) => state
  );
  const filtered = products.filter(
    (product) => product.type === selectedValue.val.toLowerCase()
  );

  return (
    <>
      {selectedValue.val === selectValues[0].option
        ? products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="product"
            >
              <img src={product.image} alt={product.name} />
              <div>
                <h5>{product.name}</h5>
                <p> EGP {product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))
        : filtered.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="product"
            >
              <img src={product.image} alt={product.name} />
              <div>
                <h5>{product.name}</h5>
                <p> {product.price} EGP </p>
              </div>
            </Link>
          ))}
    </>
  );
};
export default HomeProducts;
