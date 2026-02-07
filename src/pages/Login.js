import { useState } from "react";
import axios from "axios";
import bgImage from "../assets/logo.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/*  LEFT SIDE IMAGE ONLY */}
      <div
        className="hidden md:block w-1/2 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/*  RIGHT SIDE CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100 px-6">

   {/*  OVERLAY TEXT (TOP RIGHT SECTION) */}
        <div className="w-full max-w-md mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4 rounded-2xl text-center shadow-lg">
            <h1 className="text-2xl font-bold mb-2 text-white">MEDHASHALA</h1>
            <p className="text-sm text-white opacity-90">
            Unified Learning Platform for <br />
            Govt Exams • Medical • Olympiad • Coaching
            </p>
        </div>
        </div>

        {/*  LOGIN CARD (BOTTOM) */}
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 mb-6">
            Login to continue learning
          </p>

          {/* Email */}
          <input
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <input
            type="password"
            className="w-full border border-gray-300 p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition duration-300"
            onClick={login}
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-sm text-gray-500 text-center mt-6">
            © 2026 MEDHASHALA Platform
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;