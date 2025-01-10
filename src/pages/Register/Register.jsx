import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";



const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const { createNewUser, setUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    //console.log({ name, email, photo, password });
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.warn(
        "Password Must have an Uppercase & Lowercase at least 6 character"
      );
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate(location?.state ? location.state : "/");
          })
          .catch((err) => {
            // console.log(err);
          });
        toast.success("Registration successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
  };
  // for google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Registration successful");
      })
      .catch((error) => {
        // console.log("Error", error.message);
      });
  };
  return (
    <div className="min-h-scree flex justify-center">
      <Helmet>
        <title>Career Kindle | Register </title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl mb-10 font-extrabold text-center ">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className=" px-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {error.name && (
            <label className="label text-red-600">{error.name}</label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold text-lg">Password</span>
            </label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input  input-bordered relative"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute ml-[19rem] mt-[3.2rem] p-2 bg-white"
            >
              {showPassword ? (
                <FaEyeSlash className="text-lg"></FaEyeSlash>
              ) : (
                <FaEye className="text-lg"></FaEye>
              )}
            </button>
          </div>

          <div className="flex w-full flex-col mt-5">
            <div className="card bg-base-300 rounded-box grid place-items-center">
              <button className="btn w-full bg-primaryColor text-white font-bold text-xl">
                Register
              </button>
            </div>
            <div className="divider">OR</div>
          </div>
        </form>

        <div className="card rounded-box flex flex-col items-center justify-center gap-2">
          <span className="font-semibold">Continue with Google</span>
          <button
            className="flex justify-center items-center"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-4xl" />
          </button>
        </div>

        <p className="text-center pb-5 pt-5">
          Already have an account?{" "}
          <Link className="text-red-600 font-bold" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
