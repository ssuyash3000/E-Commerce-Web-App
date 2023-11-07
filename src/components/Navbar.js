import { Link, NavLink, Outlet } from "react-router-dom";
import cartIcon from "../assets/shopping-cart.png";
import websitelogo from "../assets/websitelogo.png";
export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <nav>
          <div>
            <img style={{ height: 45 }} src={websitelogo} />
          </div>

          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976",
                  }
                : null
            }
            to="/">
            Home
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976",
                  }
                : null
            }
            to="/login">
            Login
          </NavLink>

          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976",
                  }
                : null
            }
            to="/signup">
            Signup
          </NavLink>
        </nav>

        <div style={styles.cartIconContainer}>
          <Link to="/Login">
            <img style={styles.cartIcon} alt="cart-icon" src={cartIcon} />
          </Link>

          <span style={styles.cartCount} id="product-count">
            {0}
          </span>
        </div>
      </div>
      <div className="mainContent">
        <Outlet />
      </div>
    </div>
  );
};
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  // nav: {
  //   height: 70,
  //   background: "#4267b2",
  //   display: "flex",
  //   justifyContent: "flex-end",
  //   alignItems: "center",
  // },
  cartIconContainer: {
    position: "relative",
    marginRight: 35,
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};
