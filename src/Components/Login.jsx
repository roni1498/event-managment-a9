import Navbar from "./Navbar";
import banner from "../assets/login_banner.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { toast } from "react-toastify";

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    

    const handleGoogleSignIn = () =>{
       googleSignIn()
       .then(result => {
        console.log(result.user)
        toast.success('User log in successfully');
        navigate(location?.state ? location.state : '/');
       })
       .catch(error => {
        console.log(error.message)
        
       })
    }

    console.log(location)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password =form.get('password')
        console.log(form.get('email'))

        setLoginError('')
         
        login(email, password)
        .then(result => {
            console.log(result.user)
            toast.success('User log in successfully');
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error)
            
                setLoginError('An error occurred. Please try again.');
              
        })
    }
  return (
    <div>
      <div className="bg-black opacity-70">
        <Navbar></Navbar>
      </div>
      <div className="w-full h-screen lg:flex flex-start">
        <div className="relative lg:w-1/2 h-full flex flex-col">
          <div className="absolute lg:top-[15%] top-[5%] left-[10%] flex flex-col">
            <h1 className="text-4xl text-yellow-400 font-bold my-4">
              Turn your ideas into reality
            </h1>
            <p className="text-normal text-white font-medium">
              Welcome to the EventWish Creation login page, your portal to turn
              dreams into reality. Sign in to access our event management
              platform and start crafting unforgettable experiences for your
              clients. Lets bring wishes to life together!
            </p>
          </div>
          <img src={banner} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="lg:w-1/2 h-full flex flex-col p-20">
          <h1 className="text-xl font-semibold mb-8">EventWish Creations!</h1>

          <div className="w-full flex flex-col mb-2">
            <h1 className="text-3xl font-semibold mb-4 text-green-800">Login</h1>
            <p className="mb-2 font-medium">
              Welcome back! please enter your email & password.
            </p>

            <form onSubmit={handleLogin} className="w-full flex flex-col">
             
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full py-4 my-4 border-b border-black outline-none focus:outline-none bg-transparent"
                required
              />

<div className="relative">
             <input
                type={showPassword ? "text" : "Password"}
                placeholder="password"
                name="password"
                className="w-full py-4 my-4 border-b border-black outline-none focus:outline-none bg-transparent"
                required
              />
              <span className="absolute bottom-7 right-6 text-2xl" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
             </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

              <div className="form-control mt-6">
                <button className="btn text-lg bg-green-800 text-white rounded-lg">Login</button>
                <p className="text-center font-semibold my-3">Or</p>
                <button onClick={handleGoogleSignIn} className="btn bg-gray-700 text-white rounded-lg text-lg"><FaGoogle className="text-xl"></FaGoogle> Login With Google</button>
              </div>
            </form>
            {
                    loginError && <p className="text-red-600 mt-6">{loginError}</p>
                }
          <div className="mt-8">
            <p className="text-center">
              Do not have an account?
              <Link to="/register"> <span className="text-blue-600 font-bold underline underline-offset-2">
                Register
              </span></Link>
            </p>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;

