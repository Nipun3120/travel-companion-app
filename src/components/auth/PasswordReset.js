import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation, Navigate } from "react-router-dom";
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
import { login } from "../../api/user";

export const PasswordReset = () => {
  const { currentUser, setCurrentUser } = useCurrentUserContext();
  const { isLoggedIn, setLoggedIn } = useLoggedInStatus();
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [email, setUserName] = useState("");
  const [helperText, setHelperText] = useState("");

  const checkCredentials = async () => {
    const newCredentials = { email };
    if (email !== "") {
      // ----- set loading true here ------
      //  login(newCredentials);
      // ------ SEND PASS CHANGE REQUEST TO SERVER
      // ------ GENERATE RESET LINK AND SEND TO REGISTERED EMAIL AND SEND UID IN IT
      // ------ stack/google
    } else {
      setHelperText("Enter username please");
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
              Reset Your Password
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
                  onChange={(e) => setUserName(e.targer.value)}
                />
              </div>
              {/* <div>
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
              </div> */}
            </div>

            <div className="flex items-center justify-between">
              {/* <div className="flex items-center">
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
              </div> */}

              <div className="text-sm">
                <Link
                  to="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  //    onClick={navigate("/login", { replace: true })}
                >
                  Login
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
                Sign in
              </button>
            </div>
            {helperText && <p className="text-red-500">{helperText}</p>}
          </form>
        </div>
      </div>
    </>
  );
};
