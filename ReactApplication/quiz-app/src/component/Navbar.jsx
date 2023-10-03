// import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogout = () => {
//     // Handle logout logic here
//     setLoggedIn(false);
//   };

  return (
    <div className="sticky top-0 z-10 bg-black text-3xl flex justify-between items-center text-red-500 font-bold p-4 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Byte<span className="text-white">Master</span>
        </span>
      </Link>
      <div className="flex items-center">
        <Link to={"/competition"}>
          <button className="text-white">Competition</button>
        </Link>
        <Link to={"/scoreboard"}>
          <button className="text-white">Scoreboard</button>
        </Link>
        <Link to={"/leaderboard"}>
          <button className="text-white">Leaderboard</button>
        </Link>
        <Link to={"/profile"}>
          <button className="text-white">Profile</button>
        </Link>
        <Link to={"/about"}>
          <button className="text-white">About</button>
        </Link>
        {/* {loggedIn ? (
          <button onClick={handleLogout} className="text-white">
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="text-white">Login</button>
          </Link>
        )} */}
      </div>
    </div>
  );
}

export default Navbar;
