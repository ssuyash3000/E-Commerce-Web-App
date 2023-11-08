import { useSelector } from "react-redux";
import { userSelector } from "../redux/reducers/userReducer";

import { CartProduct } from "../components/CartProduct";

export const CartPage = () => {
  const { userInfo, userCartData } = useSelector(userSelector);

  return (
    <div className="cartPage" style={styles.cartPage}>
      <h3>Hello {userInfo}</h3>
      <div className="prodPart" style={styles.prodPart}>
        {userCartData.map((prod, index) => {
          return <CartProduct currProd={prod} key={index} />;
        })}
      </div>
    </div>
  );
};
const styles = {
  cartPage: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  prodPart: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
};
