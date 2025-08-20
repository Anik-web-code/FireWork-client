import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = React.useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign Out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <NavLink
        className="text-[#FF4500] text-[21px]"
        to="/"
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        className="text-[#FF4500] text-[21px]"
        to="/addtask"
        onClick={() => setIsOpen(false)}
      >
        Add Task
      </NavLink>
      <NavLink
        className="text-[#FF4500] text-[21px]"
        to="/browsetask"
        onClick={() => setIsOpen(false)}
      >
        Browse Task
      </NavLink>
      <NavLink
        className="text-[#FF4500] text-[21px]"
        to="/mytasks"
        onClick={() => setIsOpen(false)}
      >
        My Posted Tasks
      </NavLink>
    </>
  );

  return (
    <nav className="bg-white w-full shadow-sm mb-0">
      <div className="max-w-[90%] mx-auto p-4 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://i.postimg.cc/ZY3yZB1Q/97840a36-9567-43d4-aa7d-085b1835e4a4.jpg"
            alt="Logo"
          />
          <h1 className="text-3xl font-medium text-[#FF4500]">FireWork</h1>
        </div>

        <div className="hidden md:flex gap-14 items-center">{navLinks}</div>

        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="text-lg font-semibold text-[#FF4500] border border-[#FF4500] px-4 py-2 rounded-sm hover:bg-[#FF4500] hover:text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="ml-2 text-lg font-semibold text-[#FF4500] border border-[#FF4500] px-4 py-2 rounded-sm hover:bg-[#FF4500] hover:text-white"
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <Link to="/profile">
                <img
                  className="rounded-full h-12 w-12"
                  src={user.photoURL}
                  alt="Profile"
                />
              </Link>
              <button
                onClick={handleSignOut}
                className="ml-2 text-lg font-semibold text-[#FF4500] border border-[#FF4500] px-4 py-2 rounded-sm hover:bg-[#FF4500] hover:text-white"
              >
                Log out
              </button>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button className="text-[#FF4500]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {navLinks}

          {!user ? (
            <>
              <NavLink
                to="/login"
                className="text-lg font-semibold text-[#FF4500] border border-[#FF4500] px-4 py-2 rounded-sm hover:bg-[#FF4500] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-lg font-semibold text-[#FF4500] border border-[#FF4500] px-4 py-2 rounded-sm hover:bg-[#FF4500] hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <div className="relative group">
                <img
                  className="rounded-full h-12 w-12 cursor-pointer"
                  src={user.photoURL}
                  alt="Profile"
                />
                <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-white border border-gray-200 rounded shadow-lg z-50 min-w-[180px]">
                  <span className="px-4 py-2 text-gray-700 font-medium border-b">
                    {user.displayName}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-left text-red-600 hover:bg-red-50 hover:text-red-800"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
