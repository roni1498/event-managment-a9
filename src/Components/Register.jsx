import Navbar from "./Navbar";
import banner from "../assets/login_banner.jpg";
import { Link } from "react-router-dom";

const Register = () => {
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
            <form className="w-full flex flex-col">
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

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full py-4 my-4 border-b border-black outline-none focus:outline-none bg-transparent"
                required
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-lg text-white">
                  Register
                </button>
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
