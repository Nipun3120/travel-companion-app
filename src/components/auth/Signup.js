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
import { login, signup } from "../../api/user";

export const Signup = () => {
  const { currentUser, setCurrentUser } = useCurrentUserContext();
  const { isLoggedIn, setLoggedIn } = useLoggedInStatus();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [helperText, setHelperText] = useState("");

  const checkCredentials = async () => {
    const newCredentials = { email, password, confirmPassword, username };
    if (
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      username !== ""
    ) {
      if (password === confirmPassword) {
        // ----- set loading true here ------
        signup(newCredentials);
      } else setHelperText("Passwords do not match, try again");
    } else {
      setHelperText("missing credentials");
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
              Create Account
            </h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p> */}
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="name"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md mt-2 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  // onClick={navigate("password_reset", { replace: true })}
                >
                  Already have an account?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={checkCredentials}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>
            {helperText && <p className="text-red-500">{helperText}</p>}
          </form>
        </div>
      </div>
    </>
  );
};
