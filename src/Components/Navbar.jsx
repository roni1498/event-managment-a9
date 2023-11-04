import { NavLink } from "react-router-dom";
import { TbLogin2 } from 'react-icons/tb';
import logo from '../assets/logo.png'


const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div className=" text-white">
            
            <div className="max-w-7xl mx-auto">
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <div className="flex items-center gap-4">
    <img className="lg:h-16 lg:w-16 w-12 h-12" src={logo} alt="" />
    <div className="text-center">
    <h2 className="lg:text-2xl"> EventWish</h2>
    <h4 className="lg:text-xl text-base lg:font-semibold -m-2">creations</h4>
    </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn rounded-xl btn-outline btn-primary">
  <TbLogin2 className="text-xl "></TbLogin2>
  Login
</button>
  </div>
</div>
        </div>
        </div>
    );
};

export default Navbar;