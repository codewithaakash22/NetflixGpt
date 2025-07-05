const Footer = () => {
  return (
    <div className="w-full bg-black py-5 md:py-10 mx-auto bottom-0 px-8 md:px-0 ">
      <div className=" md:w-3/4 md:px-36">
      <span className="text-xs text-gray-400">Questions? Call 000-800-919-1743</span>
        <div className="flex justify-between py-3 md:py-6 md:text-xs  md:underline text-gray-400"> 
          <ul className="hidden md:block">
          <li className="p-2 cursor-pointer">FAQ</li>
          <li className="p-2 cursor-pointer">Investor Relations</li>
          <li className="p-2 cursor-pointer">Privacy</li>
          <li className="p-2 cursor-pointer">Speed Test</li>
          </ul>

          <ul className="hidden md:block">
          <li className="p-2 cursor-pointer">Help Centre</li>
          <li className="p-2 cursor-pointer">Jobs</li>
          <li className="p-2 cursor-pointer">Cookie Preferences</li>
          <li className="p-2 cursor-pointer">Legal Notices</li>
          </ul>

          <ul>
          <li className="p-2 cursor-pointer">Account</li>
          <li className="p-2 cursor-pointer">Ways to Watch</li>
          <li className="p-2 cursor-pointer">Corporate Information</li>
          <li className="p-2 cursor-pointer">Only on Netflix</li>
          </ul>

          <ul>
          <li className="p-2 cursor-pointer">Media Centre</li>
          <li className="p-2 cursor-pointer">Terms of Use</li>
          <li className="p-2 cursor-pointer">Contact Us</li>
          </ul>
        </div>
        
      <span className="text-xs text-gray-400">Netflix India</span>
    </div>
    </div>
  )
}

export default Footer;