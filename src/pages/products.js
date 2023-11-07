import { useSelector } from "react-redux";
import { authSelector } from "../redux/reducers/authReducer";
import { Tooltip } from "react-tooltip";
export const Products = (props) => {
  const { isLoggedIn } = useSelector(authSelector);
  // console.log(isLoggedIn);
  const {
    brand,
    category,
    description,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = props.currProd;
  return (
    <div className="productCard" style={styles.productCardStyle}>
      <img src={thumbnail} style={{ height: 250, width: 200 }} />
      <div style={styles.productDescpStyle}>
        <p>{title}</p>
        <p>Price: ₹{price}</p>
        <p>Category: {category}</p>
      </div>
      {/* conditional rendering to ensure that tooltip only appears when button is
      disabled */}
      <Tooltip id="addcart-tooltip" />
      {!isLoggedIn ? (
        <button
          data-tooltip-id="addcart-tooltip"
          data-tooltip-content="Login to adds this product in cart"
          onClick={() => console.log("click")}
          disabled={!isLoggedIn}>
          Add to Cart
        </button>
      ) : (
        <button onClick={() => console.log("click")} disabled={!isLoggedIn}>
          Add to Cart
        </button>
      )}
    </div>
  );
};
const styles = {
  productCardStyle: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "19%",
    alignItems: "flex-start",
    margin: 10,
    padding: 10,
    flexWrap: "nowrap",
    alignItems: "center",
  },
  productDescpStyle: {
    textWrap: "balance",
    margin: 30,
    height: 70,
    width: 160,
  },
};
