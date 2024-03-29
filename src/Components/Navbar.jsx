import { Link, NavLink } from "react-router-dom";
import { TbLogin2 } from "react-icons/tb";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import userDefaultPhoto from "../assets/user.png";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(() =>{
      toast.success('user Sign Out successfully')
    })
    .catch();
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <a href="#about-us">About Us</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <NavLink to="/entertainment">Entertainments</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <div className=" text-white">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                {links}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <img className="lg:h-16 lg:w-16 w-12 h-12" src={logo} alt="" />
              <div className="text-center">
                <h2 className="lg:text-2xl"> EventWish</h2>
                <h4 className="lg:text-xl text-base lg:font-semibold -m-2">
                  creations
                </h4>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
          </div>
          <div className="navbar-end">
            {user && (
              <div className="flex items-center">
                <p className="">{user.displayName}</p>
                {user.photoURL ? (
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                ) : (
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar mr-3"
                  >
                    <div className="w-10 rounded-full">
                      <img src={userDefaultPhoto} />
                    </div>
                  </label>
                )}
              </div>
            )}
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn rounded-xl btn-outline btn-primary"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn rounded-xl btn-outline btn-primary">
                  <TbLogin2 className="text-xl "></TbLogin2>
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
