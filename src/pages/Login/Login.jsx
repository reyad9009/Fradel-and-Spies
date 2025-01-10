import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
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

    // userLogin(email, password)
    //   .then((result) => {
    //     const user = { email: result.user.email }; // Use the email from the result object
    //     axios
    //       .post("http://localhost:5000/jwt", user, { withCredentials: true })
    //       .then((res) => {
    //         console.log(res.data);

    //         setUser(user);
    //         e.target.reset();
    //         toast.success("Login successful");
    //         navigate(location?.state ? location.state : "/");
    //       });
    //   })
    //   .catch((err) => {
    //     setError({ ...error, login: err.code });
    //     toast.warn("User not found");
    //   });
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
  // for google signIn
  // const handleGoogleSignIn = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       const user = { email: result.user.email }; // Use the email from the result object
  //       axios
  //         .post("http://localhost:5000/jwt", user, { withCredentials: true })
  //         .then((res) => {
  //          console.log(res.data);
  //           navigate("/"); // Navigate after successful post
  //           toast.success("Login successful");
  //         })
  //         .catch((error) => {
  //           console.error("Error posting to server:", error.message);
  //           toast.error("Login failed, please try again.");
  //         });
  //     })
  //     .catch((error) => {
  //      // console.error("Sign-in error:", error.message);
  //       toast.error("Sign-in failed, please try again.");
  //     });
  // };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        navigate("/");
        toast.success("Login successful");
      })
      .catch((error) => {
        // console.log("Error", error.message);
      });
  };

  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Career Kindle | Login</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center mb-10">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="px-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Email</span>
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
              <span className="label-text text-lg font-semibold">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className=" absolute ml-[16rem] mt-[3.2rem] p-2 bg-white"
            >
              {showPassword ? (
                <FaEyeSlash className="text-lg"></FaEyeSlash>
              ) : (
                <FaEye className="text-lg"></FaEye>
              )}
            </button>

            {/* {error.login && <label className="label">{error.login}</label>} */}

            <label className="label">
              <a className="label-text-alt link link-hover text-base mt-2">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control">
            <button className="btn bg-primaryColor text-white font-bold text-lg">
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
