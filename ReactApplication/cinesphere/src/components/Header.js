import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import { Audio, ThreeDots } from "react-loader-spinner";
import { AppState } from "../App";

function Header() {
  const useAppstate=useContext(AppState);



  return (
    <div className="sticky top-0 z-10 bg-black text-3xl flex justify-between items-center text-red-500 font-bold p-4 border-b-2 border-gray-500 ">
      <Link to={"/"}>
        <span>
          Cine<span className="text-white">Sphere</span>
        </span>
      </Link>
      {
        useAppstate.login ?
        <Link to={"/addmovie"}>
        <h1 className="text-xl flex items-center mr-1 text-white cursor-pointer">
          <Button>
            <AddIcon
              className="mr-1 flex items-center text-red-500"
              color="inherit"
            />
            <span className="text-white text-base md:text-sm ">Add new</span>
          </Button>
        </h1>
      </Link>
      :
      <Link to={"/login"}>
        <h1 className="text-xl flex items-center mr-1 text-white cursor-pointer hover:bg-zinc-700">
          <Button>
            {/* <AddIcon
              className="mr-1 flex items-center text-red-500"
              color="inherit"
            /> */}
            <span className="text-white text-xl md:text-base capitalize">Login</span>
          </Button>
        </h1>
      </Link>
      }
    </div>
  );
}

export default Header;
