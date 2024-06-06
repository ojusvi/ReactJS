import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { nbanimate } from "../assets/images";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Adding error states for validation
  const [usernameError, setUsernameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    if (e.target.value === "") {
      setUsernameError("Username is required");
    } else {
      setUsernameError(null);
      setUsername(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    if (e.target.value === "") {
      setEmailError("Email is required");
    } else {
      setEmailError(null);
      setEmail(e.target.value);
    }
  };

  const handlePasswordChange = (e) => {
    if (e.target.value === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError(null);
      setPassword(e.target.value);
    }
  };

  const handleSignUp = async () => {
    if (username === "") {
      setUsernameError("Username is required");
      return;
    }

    if (email === "") {
      setEmailError("Email is required");
      return;
    }

    if (password === "") {
      setPasswordError("Password is required");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be 8 characters long");
      return;
    }

    // You can add API call here to sign up the user
    try {
      await axios.post("http://localhost:5000/api/users/signup", {
        email,
        password,
        username,
      });

      toast("Sign up successful");

      navigate("/signin");
    } catch (error) {
      console.error("Error signing up:", error);
      toast("Error signing up");
    }
  };

  return (
    <section className="">
      <div className="">
        <div className="flex items-center justify-center py-10">
          <img src={nbanimate} alt="" width={130} height={130} />
        </div>
        <div className="flex justify-center items-center mx-auto">
          <div className="">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Sign in here
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="Username"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Username address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      id="Username"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={handleUsernameChange}
                    ></input>

                    {/* Email Error */}
                    {usernameError && (
                      <p className="text-red-500 text-sm mt-2 ">
                        {usernameError}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      onChange={handleEmailChange}
                    ></input>

                    {/* Email Error */}
                    {emailError && (
                      <p className="text-red-500 text-sm mt-2 ">{emailError}</p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                    ></input>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-2 ">
                        {passwordError}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-amber-400 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-amber-400/80"
                    onClick={handleSignUp}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </span>
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
