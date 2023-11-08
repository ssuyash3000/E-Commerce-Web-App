import { useDispatch, useSelector } from "react-redux";
import { addIcon, decIcon, deleteBtnIcon } from "../assets/exportAssets";
import {
  changeProdCountInCart,
  removeProductInCart,
  userSelector,
} from "../redux/reducers/userReducer";
import { authSelector } from "../redux/reducers/authReducer";

export const CartProduct = (props) => {
  const { userCartData } = useSelector(userSelector);
  const { userEmail, isLoggedIn } = useSelector(authSelector);
  const dispatch = useDispatch();
  const handleDeleteProd = () => {
    console.log(userEmail);
    dispatch(removeProductInCart({ userEmail, prod: props.currProd }));
  };
  const handleIncProd = () => {
    console.log(userEmail);
    dispatch(
      changeProdCountInCart({
        userEmail,
        prod: props.currProd,
        newValue: props.currProd.count + 1,
        userCartData,
      })
    );
  };
  const handleDecProd = () => {
    console.log(userEmail);
    dispatch(
      changeProdCountInCart({
        userEmail,
        prod: props.currProd,
        newValue: props.currProd.count - 1,
        userCartData,
      })
    );
  };
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = props.currProd.prod;
  return (
    <div className="cartProd" style={styles.productCardStyle}>
      <img src={thumbnail} style={{ height: 250, width: 200 }} />
      <div style={styles.productDescpStyle}>
        <p>{title}</p>
        <p>Price: ₹{price}</p>
        <p>
          Discounted Price: ₹
          {Math.round(price - (price * discountPercentage) / 100)}
        </p>
        <p>Category: {category}</p>
        <p>Count: {props.currProd.count}</p>
      </div>
      <div className="btnCtn">
        <button style={styles.btn} onClick={() => handleIncProd()}>
          <img src={addIcon} style={styles.btnCtnICON} />
        </button>
        <button style={styles.btn} onClick={() => handleDecProd()}>
          <img src={decIcon} style={styles.btnCtnICON} />
        </button>
        <button style={styles.btn} onClick={() => handleDeleteProd()}>
          <img src={deleteBtnIcon} style={styles.btnCtnICON} />
        </button>
      </div>
    </div>
  );
};
const styles = {
  productCardStyle: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "39%",
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
    width: 260,
  },
  btnCtn: {
    display: "flex",

    flexDirection: "row",
  },
  btn: {
    margin: 10,
  },
  btnCtnICON: {
    height: 30,
    width: 30,
  },
};
