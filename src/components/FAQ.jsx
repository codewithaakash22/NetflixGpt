import { useState } from "react";

const FAQ = ({data}) => {
  const [showAns, setShowAns] = useState(false);
  const toggleAns = () =>{
    setShowAns(!showAns);
  }
  return (
      <div className="my-2 ">
        <div  className="text-white text-sm md:text-lg   bg-gray-500/20 flex justify-between p-5 my-0.5 cursor-pointer" onClick={toggleAns}>
          <h2>{data.question}</h2>
          <p  >{showAns ? <i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-plus"></i> }</p>    
        </div>  
        {  showAns &&
        <div className="text-white text-sm md:text-lg  bg-gray-500/20 flex justify-between p-5 text-justify">
            {data.answer}
        </div>
        } 
      </div>
  );
};

export default FAQ;
