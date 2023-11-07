import "../App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Navbar } from "./Navbar";
import { Provider, useSelector } from "react-redux";
import { store } from "../redux/store";
import { alertSelector } from "../redux/reducers/alertReducer";
import { useEffect } from "react";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Home } from "../pages/Home";

export default function App() {
  const { message } = store.getState().alertReducer;
  useEffect(() => {}, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        // {
        //   path: "/",
        //   children: [
        //     { index: true, element: "" },
        //     { path: ":", element: "" },
        //   ],
        // },
      ],
    },
  ]);

  return (
    <div className="App">
      {message && <div className="alert">{message}</div>}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}
