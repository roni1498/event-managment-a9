import Navbar from "./Navbar";
import banner from "../assets/login_banner.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        setRegisterError('')
        setSuccess('')

        if(password.length < 6){
            setRegisterError('password should at least 6 characters or longer')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password Should have at least one capital letter')
            return;
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
            setRegisterError('Your password should have at least one special character')
            return;
        }

        // create user
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            toast.success('User created successfully');
            setSuccess('user Created Successfully')
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            setRegisterError(error.message)
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
              Register with EventWish Creation and become part of our event
              management community. Create an account to access a world of
              possibilities for crafting extraordinary experiences. Join us in
              making wishes come true, one event at a time!
            </p>
          </div>
          <img src={banner} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="lg:w-1/2 h-full flex flex-col p-20 justify-between">
          <h1 className="text-xl font-semibold">Join EventWish Creation</h1>

          <div className="w-full flex flex-col mb-2">
            <h1 className="text-3xl font-semibold mb-4 text-orange-300">Register</h1>
            <p className="mb-2 font-medium">
              Welcome! please join with us to know more.
            </p>
            <form onSubmit={handleRegister} className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full py-4 my-4 border-b border-black outline-none focus:outline-none bg-transparent"
              />

              <input
                type="text"
                placeholder="Photo"
                name="photo"
                className="w-full py-4 my-4 border-b border-black outline-none focus:outline-none bg-transparent"
              />

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
                <button className="btn btn-primary rounded-lg text-white">
                  Register
                </button>
                {
                    registerError && <p className="text-red-600 mt-6">{registerError}</p>
                }
                {
                    success && <p className="text-green-600 mt-6">{success}</p>
                }
              </div>
            </form>
            <div className="mt-8">
              <p className="text-center">
                Already have an account?
                <Link to="/login">
                  <span className="text-blue-600 font-bold underline underline-offset-2">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Register;
