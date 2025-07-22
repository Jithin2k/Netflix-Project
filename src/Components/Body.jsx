import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../Utils/firebase";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
      
      } else {
        dispatch(removeUser());
       
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
