import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();
  const { getCurrentUser } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/login", form);

      await getCurrentUser();

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-700 flex items-center justify-center px-4">

      {/* Floating Background Blobs */}

      <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 animate-pulse top-0 left-0"></div>

      <div className="absolute w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse bottom-0 right-0"></div>

      <div className="absolute w-52 h-52 bg-purple-400 rounded-full blur-3xl opacity-30 animate-bounce top-40 right-32"></div>

      {/* Login Card */}

      <form
        onSubmit={handleSubmit}
        className="relative backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-md text-white"
      >
        <div className="text-center mb-8">

          <div className="text-6xl mb-3 animate-pulse">
            🩺
          </div>

          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-white/80 mt-2">
            Login to MediMind AI
          </p>

        </div>

        {/* Email */}

        <div className="mb-5">

          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white outline-none focus:ring-4 focus:ring-cyan-300 transition"
          />

        </div>

        {/* Password */}
        <div className="mb-7">

            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white outline-none focus:ring-4 focus:ring-cyan-300 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-cyan-300 transition"
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </button>

            </div>

        </div>
        <button
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-blue-600 hover:to-purple-600 font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
        >
          Login →
        </button>
        <p className="text-center mt-7 text-white/90">

          Don't have an account?

          <Link
            to="/register"
            className="font-bold ml-2 text-yellow-300 hover:text-white transition"
          >
            Register
          </Link>

        </p>

      </form>
    </div>
  );
};

export default Login;