import { useState } from "react";

const FAQ = ({data}) => {
  const [showAns, setShowAns] = useState(false);
  const toggleAns = () =>{
    setShowAns(!showAns);
  }
  return (
      <div className="my-2 ">
        <div  className="text-white text-lg  bg-gray-500/20 flex justify-between p-5 my-0.5">
          <h2>{data.question}</h2>
          <p className='cursor-pointer' onClick={toggleAns}>{showAns ? <i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-plus"></i> }</p>    
        </div>  
        {  showAns &&
        <div className="text-white text-lg  bg-gray-500/20 flex justify-between p-5 ">
            {data.answer}
        </div>
        } 
      </div>
  );
};

export default FAQ;
