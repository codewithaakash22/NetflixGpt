const Footer = () => {
  return (
    <div className="w-full  bg-black py-10 mx-auto bottom-0">
      <div className="w-3/4 px-36">
      <span className="text-xs text-gray-400">Questions? Call 000-800-919-1743</span>
        <div className="flex justify-between content-center py-6 text-xs underline text-gray-400"> 
          <ul>
          <li className="p-2 cursor-pointer">FAQ</li>
          <li className="p-2 cursor-pointer">Investor Relations</li>
          <li className="p-2 cursor-pointer">Privacy</li>
          <li className="p-2 cursor-pointer">Speed Test</li>
          </ul>

          <ul>
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