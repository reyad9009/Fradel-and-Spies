import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
        toast.success("Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
        toast.warn("User not found");
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Login successful");
      })
      .catch((error) => {
        // console.log("Error", error.message);
      });
  };

  return (
    <div className="flex justify-center mt-16">
      <Helmet>
        <title>Career Kindle | Login</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl dark:text-white dark:bg-black">
        <h2 className="text-2xl font-bold text-center pt-5 mb-10 dark:text-primary">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="px-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold dark:text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordere dark:text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold dark:text-white">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered dark:text-black"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute ml-[16rem] mt-[3.2rem] p-2 bg-white"
            >
              {showPassword ? (
                <FaEyeSlash className="text-lg dark:text-black"></FaEyeSlash>
              ) : (
                <FaEye className="text-lg dark:text-black"></FaEye>
              )}
            </button>

            {/* {error.login && <label className="label">{error.login}</label>} */}

            <label className="label">
              <a className="label-text-alt link link-hover text-base mt-2 dark:text-white">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <button type='submit' className="btn dark:border-none bg-primary text-white font-bold text-lg">
              Login
            </button>
          </div>
          <div className="divider">OR</div>
        </form>

        <div className="card rounded-box flex items-center justify-center gap-2">
          <span className="font-semibold">Continue with Google</span>
          <button
            className="flex justify-center items-center"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-4xl" />
          </button>
        </div>

        <p className="text-center mb-10 mt-5">
          Don't have an account ?
          <Link className="text-red-600 font-bold ml-2" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
