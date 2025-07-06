import { useState, useRef } from "react";
import { checkValidation } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { BANNER, Profile_URL } from "../../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
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

      <div className="relative h-[80vh]  bg-black  md:h-full">
        <img className="h-full object-cover md:object-fill rounded-3xl"
          src={BANNER}
          alt="banner"
        />
      </div>
      <form
        className="absolute p-6 md:p-12 mx-6 md:mx-auto md:w-3/12 bg-black/80 text-white rounded-sm  left-0 right-0 top-24 md:top-60"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="w-full bg-gray-900 p-4 my-2 rounded-sm border border-gray-500"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="w-full bg-gray-900 p-4 my-2 rounded-sm border border-gray-500"
        />
        <input
          ref={passowrd}
          type="password"
          placeholder="Password"
          className="w-full bg-gray-900 p-4 my-2 rounded-sm border border-gray-500"
        />
        <p className="text-red-500">{errorMessage}</p>

        <button
          className="w-full p-2 bg-red-600 font-bold rounded-lg my-4 cursor-pointer"
          onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400">
          {isSignIn ? "New to Netflix?" : "Already have an account. "}
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
