import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    mobile: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);

    // Simulate login without using Firebase
    // In a real application, you can implement actual login logic here
    // For this example, we are using a hardcoded user with password "password123"
    const user = {
      mobile: "1234567890",
      password: "password123"
    };

    try {
      if (form.password === user.password && form.mobile === user.mobile) {
        navigate("/");
        setLoading(false);
      } else {
        alert("Invalid Credentials");
        setLoading(false);
      }
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div
        className="container px-5 py-8 mx-auto flex flex-wrap"
        style={{ maxWidth: "752px", height: "90vh" }}
      >
        {/* Left Side (Image) */}
        <div className="w-2/5 h-full">
          <img
            src="https://static.rfstat.com/renderforest/images/v2/sign-up/Sign_Up3.png"
            className="object-cover h-full rounded-l-lg"
            alt=""
          />
        </div>

        {/* Right Side (Login Form) */}
        <div className="w-3/5 bg-gray-800 p-6 rounded-r-lg shadow-md">
          <h1 className="text-xl font-medium title-font mb-1 text-white text-left pl-3">
            Welcome Back!
          </h1>
          <div className="flex flex-wrap -m-2 pl-3 pr-3">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="mobile" className="leading-7 text-sm text-white">
                  Mobile No./Email id
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  className="w-full bg-white rounded border text-black border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="password" className="leading-7 text-sm text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full text-black bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full pt-0 mt-0">
              <button
                className="text-sm text-gray-400 float-right mb-1 bg-transparent border-none outline-none cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={login}
                className="w-full bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-800 rounded text-white text-lg"
              >
                {loading ? <TailSpin height={25} color="white" /> : "Login"}
              </button>
            </div>
            <div className="p-2 w-full text-center mt-4">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <Link to={'/signup'}>
                  <span className="text-white">Sign up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
