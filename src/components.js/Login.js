import React, { useRef, useState } from "react";
import Header from "./Header";
import { handleValidation } from "../utils.js/validate";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setisSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const newPage = () => {
    navigate("/browser");
  };

  const toggleSignIn = () => {
    setisSignIn(!isSignIn);
  };

  const checkValidation = () => {
    const message = handleValidation(
      name.current?.value,
      email.current?.value,
      password.current?.value
    );
    seterrorMessage(message);
    if (message === null) {
      newPage();
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover md:h-auto"src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"></img>
      </div>
      <div className="absolute p-12 bg-black m w-8/12 md:w-3/12 mx-auto my-36 right-0 left-0 bg-opacity-80">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-white font-bold p-0 m-2 text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 w-full bg-gray-700 text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or Mobile Number"
            className="p-3 my-2 w-full bg-gray-700 text-white"
          />
          <input
            ref={password}
            type="text"
            placeholder="Password"
            className="p-3 my-2 w-full bg-gray-700 text-white"
          />
          <p className="text-red-600">{errorMessage}</p>
          <button
            className="p-3 bg-red-600 my-2 w-full rounded-lg"
            onClick={checkValidation}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-white my-2 cursor-pointer" onClick={toggleSignIn}>
            {isSignIn
              ? "New to Netflix? Sign up now."
              : "Already a user, Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
