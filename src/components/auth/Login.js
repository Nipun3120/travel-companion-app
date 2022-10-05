import { useState, useEffect } from "react";
import {
  useNavigate,
  Link,
  useLocation,
  Navigate,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import FormHelperText from "@mui/material/FormHelperText";
import { useCurrentUserContext } from "../../contexts/currentUserContext";
import { useLoggedInStatus } from "../../contexts/userLoggedInStatus";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

import { LockClosedIcon } from "@heroicons/react/solid";
import { login, loginUsingToken } from "../../api/user";

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const Login = () => {
  const { currentUser, setCurrentUser } = useCurrentUserContext();
  const { isLoggedIn, setLoggedIn } = useLoggedInStatus();
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = useState({ isTrue: false, message: "" });

  const handleNameChange = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  console.log("fromm", from);
  // const checkCredentials = async () => {
  //   if (username.match(validRegex)) {
  //     setHelperText({
  //       message: "please enter username, instead of email",
  //       isTrue: true,
  //     });
  //   } else {
  //     setHelperText({ message: "", isTrue: false });
  //     const newCredentials = { username, password };
  //     if (username !== "" && password !== "") {
  //       login(newCredentials).then((data) => {
  //         console.log("data, in login component ", data);
  //         if (data.ok) {
  //           setLoggedIn(true);
  //           localStorage.setItem("refreshToken", data.refreshToken);
  //           localStorage.setItem("accessToken", data.accessToken);
  //           localStorage.setItem("uid", data.uid);
  //           navigate("/");
  //         } else {
  //           setHelperText({ message: "Login failed, try again", isTrue: true });
  //         }
  //       });
  //     } else {
  //       setHelperText({ message: "missing credentials", isTrue: true });
  //     }
  //   }
  // };

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    if (accessToken) {
      localStorage.removeItem("accessToken");
      loginUsingToken(accessToken, refreshToken);
    }
    if (uid && uid !== undefined) {
      navigate("/", { replace: true });
    }
  }, []);

  // useEffect(() => {
  //   const listener = async (event) => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log("Enter key was pressed. Run your function.");
  //       event.preventDefault();
  //       // callMyFunction();
  //       await checkCredentials();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);

  const loginHandler = async (event) => {
    event.preventDefault();
    if (username.match(validRegex)) {
      setHelperText({
        message: "please enter your username, instead of email",
        isTrue: true,
      });
    } else {
      setHelperText({ message: "", isTrue: false });
      const newCredentials = { username, password };
      if (username !== "" && password !== "") {
        const res = await login(newCredentials);
        res.json().then((data) => {
          console.log("data, in login component ", data);
          if (data.ok) {
            setLoggedIn(true);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("uid", data.uid);
            navigate("/");
          } else {
            setHelperText({ message: "Login failed, try again", isTrue: true });
          }
        });
      } else {
        setHelperText({ message: "missing credentials", isTrue: true });
      }
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p> */}
          </div>
          <form className="mt-8 space-y-6" onSubmit={loginHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/login/password_reset"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  // onClick={navigate("password_reset", { replace: true })}
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                // onClick={checkCredentials}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            {helperText.isTrue && (
              <p className="text-red-500">{helperText.message}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
