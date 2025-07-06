import {  Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../../utils/userSlice";
import { useEffect } from "react";
import { LOGO, Profile_URL, SUPPORTED_LANGUAGES } from "../../utils/constants";
import { toggleGptSearchView } from "../../utils/GptSlice";
import { changeLanguage } from "../../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth).then(() => {})
    .catch((error) => {
    navigate('/error');
  });
  }

  const handleGptSearchClick = () =>{
    dispatch(toggleGptSearchView());
  }

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const handleLangaugeChange = (e) =>{
      dispatch(changeLanguage(e.target.value));
  }

useEffect(()=>{ 
const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email} = user;
    dispatch(addUser({uid:uid, email:email}))
    navigate("/browse");
  } else {
      dispatch(removeUser());
      navigate("/");
  }
});
// Unsiubscribe when component unmounts
  return () => unsubscribe();
},[]);

  return (
    <div className="absolute w-[100%] px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <Link to='/browse'><img  className='w-30 md:w-48' src={LOGO}
      alt='logo'/></Link>
      {auth.currentUser &&
      <div className="flex items-center">

     {showGptSearch &&  
     <select className="bg-white py-2 px-3 rounded-sm  font-semibold hidden md:block" onChange={handleLangaugeChange}>
      { 
       SUPPORTED_LANGUAGES.map((lang) => 
        <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
      )
      }
      </select>}

      <button className="p-2 text-sm md:px-4 md:py-2 text-white mx-4 font-bold bg-purple-700 rounded-sm cursor-pointer" onClick={handleGptSearchClick}>{showGptSearch ? "HomePage" : "GPT Search"}</button>
      <img src={Profile_URL} className="w-10 rounded-sm hidden md:block" alt='profile'/>
       <p className="p-2 text-sm md:px-4 md:py-2 text-white font-bold  cursor-pointer" onClick={handleSignOut}>Sign Out</p>
      </div>
      }

    </div>
  )
}

export default Header;