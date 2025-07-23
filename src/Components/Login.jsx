import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  reload,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // SignIn/SignUp
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/176993623?v=4&size=64",
          })
            .then(() => {
              return reload(auth.currentUser);
            })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="absolute w-full h-full">
        <img
          className="object-cover w-full  h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/ID-en-20250714-TRIFECTA-perspective_2721ca4b-f834-4da0-a81e-c5492057f60d_large.jpg"
          alt="background image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-md px-4 py-6 sm:px-8 sm:py-16 bg-black absolute text-white my-36 m-2 sm:mx-auto left-0 right-0 rounded-lg opacity-80"
      >
        <h1 className="font-bold text-2xl sm:text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? null : (
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className="p-4 border my-4 bg-gray-900 w-full rounded-lg"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="email"
          className="p-4 border my-4 bg-gray-900 w-full rounded-lg"
        />
        <input
          type="text"
          ref={password}
          placeholder="password"
          className="p-4 my-4 border bg-gray-900 w-full rounded-lg"
        />
        <p className="text-red-500 sm:text-lg font-semibold">{errorMessage}</p>
        <button
          className="cursor-pointer px-6 py-3 my-6 w-full bg-red-500 rounded-lg"
          onClick={handleButtonClick}
        >
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm ? "New to Netflix?" : "Already a user?"}
          <span className="font-semibold underline">
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
