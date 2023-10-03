import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";



import { Link } from "react-router-dom";
import swal from "sweetalert";
// import bcrypt from 'bcryptjs';
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    skills: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [otpsent, setOtpSent] = useState(false);
  const [OTP, setOTP] = useState("");

  const requestOtp = () => {
    setLoading(true);
    swal({
      text: "OTP sent",
      icon: "success",
      buttons: false,
      timer: 1500,
    });
    setOtpSent(true);
    setLoading(false);
  }

  const verifyOTP = async () => {
    try {
      setLoading(true);
      swal({
        text: "Successfully Registered",
        icon: "success",
        buttons: false,
        timer: 3000,
      });
      navigate('/login');
      setLoading(false);
    } catch (error) {
      swal({
        title: "Something went wrong",
        icon: "error",
        buttons: false,
        timer: 3000,
      });
      setLoading(false);
    }
  };

  const genres = ["JAVA", "Python", "C", "C++", "Ruby", "PHP"];

  return (
    <>
      <div
        className="container px-5 py-8 mx-auto flex flex-wrap"
        style={{ maxWidth: "600px", height: "90vh" }}
      >
        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-md ">
          <div className="text-xl font-medium title-font text-white text-center border-b-2 pb-2">
            Sign Up
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="mobile" className="leading-7 text-sm text-white">
                Mobile No.
              </label>
              <input
                type={"number"}
                id="mobile"
                name="mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="favoriteMovieGenre"
                className="leading-7 text-sm text-white"
              >
                Skills
              </label>
              <select
                id="favoriteMovieGenre"
                name="favoriteMovieGenre"
                value={form.favoriteMovieGenre}
                onChange={(e) =>
                  setForm({ ...form, favoriteMovieGenre: e.target.value })
                }
                className="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="">Select Genre</option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-white"
              >
                Password
              </label>
              <input
                type={"password"}
                id="password"
                name="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="p-2 w-full">
            {otpsent ? (
              <>
                <div className="relative">
                  <label htmlFor="otp" className="leading-7 text-sm text-white">
                    Enter OTP
                  </label>
                  <input
                    id="otp"
                    name="otp"
                    value={OTP}
                    onChange={(e) => setOTP(e.target.value)}
                    className="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-0 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button 
                 onClick={verifyOTP}
                  className="w-full bg-green-500 border-0 py-1 px-8 focus:outline-none hover:bg-green-800 rounded text-white text-lg mt-6">
                  {loading ? (
                    <TailSpin
                      className="justify-center"
                      height={25}
                      color="white"
                    />
                  ) : (
                    "Confirm OTP"
                  )}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={requestOtp}
                  className="w-full flex justify-center bg-green-500 border-0 py-1 px-8 focus:outline-none hover:bg-green-800 rounded text-white text-lg mt-2"
                >
                  {loading ? (
                    <TailSpin
                      className="justify-center"
                      height={25}
                      color="white"
                    />
                  ) : (
                    "Request OTP"
                  )}
                </button>
              </>
            )}
          </div>

          <p className="text-sm text-gray-400 mt-4">
            By signing up, you agree to our Terms and Conditions.
          </p>
          <p className="text-sm text-gray-400 mt-2 text-center">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-white">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
