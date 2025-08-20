import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => navigate(location?.state || "/"))
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => navigate(location?.state || "/"))
      .catch((error) => console.error(error));
  };

  const handleForgotPassword = () => {
    const email = document.querySelector("input[name='email']").value;
    if (!email) return alert("Please enter your email first.");

    sendPasswordResetEmail(auth, email)
      .then(() => alert("Password reset email sent!"))
      .catch(() => alert("Failed to send reset email."));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] dark:from-gray-900 dark:to-gray-700 p-6">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="w-full md:w-1/2 max-w-md bg-white dark:bg-gray-800 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80 shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col items-center animate-fadeIn">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Welcome Back!
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-center">
          Login to explore awesome tasks and freelance projects
        </p>

        <form onSubmit={handleLogin} className="w-full space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-[#FF4500] focus:outline-none transition-all"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-[#FF4500] focus:outline-none transition-all"
            required
          />

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button className="w-full py-3 bg-[#FF4500] dark:bg-[#FF6B3D] text-white font-bold rounded-xl hover:scale-105 transform transition-all shadow-lg">
            Login
          </button>
        </form>

        <div className="my-5 w-full flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gray-300 dark:bg-gray-600"></span>
          <span className="text-gray-500 dark:text-gray-400 font-medium">
            or
          </span>
          <span className="h-px w-10 bg-gray-300 dark:bg-gray-600"></span>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3 bg-white dark:bg-gray-700 text-black dark:text-gray-100 rounded-xl shadow-lg hover:scale-105 transform transition-all"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Continue with Google
        </button>

        <p className="mt-6 text-gray-700 dark:text-gray-300">
          New here?{" "}
          <Link className="text-blue-500 hover:underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
