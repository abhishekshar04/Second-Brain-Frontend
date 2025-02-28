import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { NavBar } from "../NavBar/NavBar";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const SignupForm: React.FC = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  async function signupHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:8888/api/v1/auth/signup",{
        name: name,
        username: username,
        password: password
      })
      console.log(response);
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <NavBar button="no" path=""/>
    <form onSubmit={signupHandler} action="">
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900">Let's Start</h2>
        <p className="text-gray-500 text-sm mt-1 mb-2">
          Please sign up to continue
        </p>

        {/* Input Fields */}
        
        <div className="mt-6 space-y-4">
        <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-[#FC715C] cursor-pointer hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300">
            Sign Up
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account?{" "}
          <NavLink to="/login" className="text-orange-500 hover:underline">Login</NavLink>
        </p>
      </div>
    </div>
    </form>
    
    <footer className="fixed bottom-0 left-0 w-full bg-[#395764] text-white text-center max-h-5 text-sm">
      <p>© {new Date().getFullYear()} All rights reserved. This website is developed and maintained by Abhishek Sharma. Unauthorized use or reproduction is prohibited.</p>
    </footer>
    </>
    
  );
};

const LoginForm : React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function LoginHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:8888/api/v1/auth/login",{
        username: username,
        password: password
      })
      localStorage.setItem('token',response.data['token']);
      console.log(response.data['token']);
      const token = localStorage.getItem('token');
      if(token){
        navigate("/dashboard/content");
      }
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <NavBar button="no" path=""/>
    <form onSubmit={LoginHandler} action="">
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900">Let's Start</h2>
        <p className="text-gray-500 text-sm mt-1">
          Please login to continue
        </p>

        {/* Input Fields */}
        <div className="mt-6 space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-[#FC715C] cursor-pointer hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300">
            Log In
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account?{" "}
          <NavLink to="/signup" className="text-orange-500 hover:underline">Signup</NavLink>
        </p>
      </div>
    </div>
    </form>
    
    <footer className="fixed bottom-0 left-0 w-full bg-[#395764] text-white text-center max-h-5 text-sm">
      <p>© {new Date().getFullYear()} All rights reserved. This website is developed and maintained by Abhishek Sharma. Unauthorized use or reproduction is prohibited.</p>
    </footer>
    </>
    
  );
};
export {SignupForm,LoginForm};
