import {  Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, Profile_URL, SUPPORTED_LANGUAGES } from "../../utils/constants";
import { toggleGptSearchView } from "../../utils/GptSlice";
import { changeLanguage } from "../../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth).then(() => {})
    .catch((error) => {
      console.log("Error occurs while sign out");
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


  return (
    <div className="absolute w-full px-4 md:px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <Link to='/browse'><img  className='w-30 md:w-40' src={LOGO}
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