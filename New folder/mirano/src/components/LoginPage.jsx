import React from 'react'
import logo from  '../assets/logo.png';
import globe from '../assets/HomePage/globe.png';
import slack from '../assets/HomePage/slack.png';
import Office from '../assets/HomePage/Office.png';
import facebook from '../assets/HomePage/facebook.png';
import apple from '../assets/HomePage/apple.png';
import google from '../assets/HomePage/google.png';
import { Link } from 'react-router-dom';



const LoginPage = () => {
  return (
    <div className="h-screen  flex flex-col w-full">
    <div className=" bg-amber-50 h-screen w-full">
   <nav class=" border-b border-black bg-slate-50 w-full">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-1 rtl:space-x-reverse">
        <img src={logo} class="h-12" />
        <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-black font-mono">Mirano</span>
    </a>
   
    <div className="flex items-center">
  <img className="w-5 h-5 mr-2" src={globe} alt="Globe Png" />
  
  <button className=" text-black  hover:text-blue-400  rounded focus:outline-none focus:shadow-outline font-mono">
    EN
  </button>
  <button className="mx-7 border-2 rounded-2xl w-24 h-14 hover:bg-black hover:text-white font-mono font-semibold">Sign Up</button>
</div>
  </div>
</nav>
<div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 py-6">
  <div className="w-full px-1 md:px-0 md:w-3/6">
    <form className="bg-white border border-black rounded-lg w-full mt-2 mb-10 p-6">
      <h3 className="text-black text-2xl md:text-5xl text-center pt-2 font-serif">Sign in to Mirano</h3>
      <a href="/">
        <button className="flex items-center justify-center hover:bg-gradient-to-r from-red-500 via-orange-300 to-blue-400  border-2 border-black rounded-lg text-lg md:text-3xl text-black hover:font-semibold mt-5 w-full md:w-5/6 mx-auto">
          <img src={google} alt="Google" className="w-6 md:w-8  md:h-8 mx-2" />
          <span className="text-base md:text-xl mb-1 font-serif">Continue with Google</span>
        </button>
      </a>
      <div className="flex flex-wrap justify-center  md:justify-start mt-4 md:pl-20">
        <button className="border-2 border-black hover:bg-black w-24 md:w-36 h-14 md:h-16 mx-1 md:mx-2 rounded-lg bg-zinc-200">
          <img className=" md:h-11 w-10 md:w-12 mx-auto" src={slack} alt="Slack Logo" />
        </button>
        <button className="border-2 border-black hover:bg-black w-24 md:w-36 h-14 md:h-16 mx-1 md:mx-2 rounded-lg bg-zinc-200">
          <img className=" md:h-11 w-10 md:w-12 mx-auto" src={Office} alt="MS-office Logo" />
        </button>
        <button className="border-2 border-black hover:bg-black w-24 md:w-36 h-14 md:h-16 mx-1 md:mx-2 rounded-lg bg-zinc-200">
          <img className=" md:h-11 w-10 md:w-12 mx-auto" src={facebook} alt="Facebook Logo" />
        </button>
        <button className="border-2 border-black hover:bg-black w-24 md:w-36 h-14 md:h-16 mx-1 md:mx-2 rounded-lg bg-zinc-200">
          <img className=" md:h-11 w-10 md:w-12 mx-auto" src={apple} alt="Apple Logo" />
        </button>
      </div>
      <hr className="border-b border-black mt-7 w-full md:w-5/6 mx-auto" />
      <div className='flex flex-col font-mono'>
      <p className="text-lg text-black mt-6 md:ml-20">Email</p>
      <input type="text" className="text-xl hover:border-blue-400 border-2 rounded-lg w-full md:w-5/6 h-12 pl-2 mx-auto mt-2" placeholder="Enter your email address" />
      <p className="text-lg text-black mt-6 md:ml-20">Password</p>
      <input type="password" className="text-xl hover:border-blue-400 border-2 rounded-lg w-full md:w-5/6 h-12 pl-4 mx-auto mt-2" placeholder="Enter your email password" />
      </div>
      <a href="/" className="block text-start text-lg text-blue-500 hover:bg-slate-200 rounded-md underline mt-6 w-full md:w-5/6 mx-auto md:ml-12 font-mono">
        Forgot Password?
      </a>
      <Link to="/Home">
        <button className="hover:bg-blue-800 bg-blue-700 text-white w-full md:w-5/6 h-10 mx-auto md:ml-12 mt-4 rounded-lg font-mono">
          Continue with email
        </button>
      </Link>
      <a href="/" className="block text-start h-10 mt-4 mb-2 w-full md:w-5/6 mx-auto md:ml-12 rounded-lg hover:bg-slate-50 font-mono">
        You can also continue with SSO
      </a>
    </form>
  </div>
</div>

</div>
</div>
  )
}
export default LoginPage
