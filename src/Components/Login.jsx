import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/ID-en-20250714-TRIFECTA-perspective_2721ca4b-f834-4da0-a81e-c5492057f60d_large.jpg"
          alt="background image"
        />
      </div>
      <form className="w-1/4 px-8 py-16 bg-black absolute text-white my-36 mx-auto left-0 right-0 rounded-s opacity-80">
        <h1 className="font-bold text-3xl mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? null : (
          <input
            type="text"
            placeholder="Name"
            className="p-4 border my-4 bg-gray-900 w-full rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 border my-4 bg-gray-900 w-full rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 border bg-gray-900 w-full rounded-lg"
        />
        <button className="cursor-pointer px-6 py-3 my-6 w-full bg-red-500 rounded-lg">
          {toggleSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm ? "New to Netflix?" : "Already a user?"}
          <span className="font-semibold underline">{isSignInForm ? "Sign Up" : "Sign In"}</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
