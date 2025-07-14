import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {Outlet} from "react-router-dom";
import { auth } from "../utils/firebase"; 
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingSpinner from './ui/LoadingSpinner';

const AppLayout = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
      } else {
        dispatch(removeUser());
      }
      setAuthChecked(true); //auth resolved
    });
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  if(!authChecked) return <LoadingSpinner/>;

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
