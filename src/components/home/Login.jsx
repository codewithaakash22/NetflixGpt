import { useState, useRef } from "react";
import { checkValidation } from "../../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BANNER, Profile_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const passowrd = useRef();

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleClick = () => {
    const message = checkValidation(
      email.current.value,
      passowrd.current.value
    );
    // console.log(name);
    setErrorMessage(message);
    if (message) return;

    //Sign In and Sign Up logic
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        passowrd.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        passowrd.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: Profile_URL,
          })
            .then(() => {
              const {uid,email, displayName,photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
  };

  return (
    <div className="relative">

      <div className="relative h-[80vh] md:h-screen w-full  bg-black ">
        <img className="h-full w-full object-cover  rounded-3xl"
          src={BANNER}
          alt="banner"
        />
      </div>
      <form
        className="absolute p-6 lg:p-10 mx-6 sm:mx-auto  md:mx-auto sm:w-[50%] md:w-4/12 bg-black/80 text-white rounded-sm  left-0 right-0 top-20 md:top-40"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-2xl font-bold mb-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="w-full bg-gray-900 p-3 my-2 rounded-sm border border-gray-500"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="w-full bg-gray-900 p-3 my-2 rounded-sm border border-gray-500"
        />
        <input
          ref={passowrd}
          type="password"
          placeholder="Password"
          className="w-full bg-gray-900 p-3 my-2 rounded-sm border border-gray-500"
        />
        <p className="text-red-500">{errorMessage}</p>

        <button
          className="w-full p-2 bg-red-600 font-bold rounded-lg my-4 cursor-pointer"
          onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400">
          {isSignIn ? "New to Netflix? " : "Already have an account. "}
          <span
            className="cursor-pointer font-bold text-white"
            onClick={toggleSignInForm}
          >
            {isSignIn ?"Sign Up Now" : "Login In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
