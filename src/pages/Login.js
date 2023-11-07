import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector, userLogin } from "../redux/reducers/authReducer";

export const Login = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector(authSelector);
  //   console.log(user);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const userEmailInput = emailRef.current.value;
    const userPasswordInput = passwordRef.current.value;
    console.log(userEmailInput, userPasswordInput);
    dispatch(userLogin({ userEmailInput, userPasswordInput }));
  };
  return (
    <div className="loignPage">
      <form onSubmit={handleLoginSubmit} style={styles.formStyle}>
        <label>Enter Your Email</label>
        <input ref={emailRef} type="email" required />
        <label>Enter Your Password</label>
        <input ref={passwordRef} type="password" required />
        <button>Login</button>
      </form>
      {displayName}
    </div>
  );
};

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
  },
};
