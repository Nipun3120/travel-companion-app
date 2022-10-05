import axios from "axios";
import { BASE_URL } from "../config/api";
import { configOptions } from "../config/configOptions";
import { AUTH } from "../config/constants";

const resetAccess = async (refreshToken, options) => {
  const result = await axios({
    method: "get",
    url: `${BASE_URL}/user/renew-access-token`,
    headers: {
      "Content-Type": "application/json",
    },
    body: { refreshToken },
  });

  localStorage.setItem("accessToken", result.data.accessToken);
  configOptions(options);
};

const login = async (data) => {
  console.log("---> ", data);
  return fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res;
      // res.json().then((data) => {
      //   console.log("data, in api: ", data);
      //   return data;
      //   // localStorage.setItem("refreshToken", data.refreshToken);
      //   // localStorage.setItem("accessToken", data.accessToken);
      //   // localStorage.setItem("uid", data.uid);
      //   // window.location.replace("/");
      // });
    })
    .catch((err) => {
      console.log(err);
    });
};

const signup = async (data) => {
  console.log("signup--> ", data);
  fetch(`${BASE_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    res.json().then((user) => {
      window.location.replace("/login");
    });
  });
};

const getUserFromId = (uid, accessToken) => {
  if (accessToken) {
    axios({
      method: "get",
      url: `${BASE_URL}/user/getUserFromId`,
      headers: {
        authorization: `Bearer ${accessToken}`,
        //     "Content-Type": "Application/json"
      },
      data: JSON.stringify(uid),
    });
  } else {
    return Promise.reject({ message: "Invalid token, try loggin in back" });
  }
};

const passwordReset = async (username) => {
  fetch(`${BASE_URL}/user/password_reset`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(username),
  })
    .then((res) => {
      console.log("res", res);
      res.json().then((message) => {
        console.log("message ", message.message);
        return message.message;
      });
    })
    .catch((err) => {
      console.error("err", err);
      err.json().then((message) => {
        console.log("error ", message.message);
        return message.message;
      });
    });
};

const loginUsingToken = async (accessToken, refreshToken) => {
  const result = await axios({
    method: "get",
    url: `${BASE_URL}/user/loginUsingToken`,
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  if (result.body.ok) {
    window.location.replace("/");
  } else {
    if (result.body.refresh) {
      resetAccess(refreshToken, AUTH.LOGIN);
    }
  }
};

const userLogout = async (accessToken, option) => {
  const result = await axios({
    method: "POST",
    url: `${BASE_URL}/user/logout`,
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  configOptions(option);
};

const logoutUser = async (accessToken) => {
  fetch(`${BASE_URL}/user/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(accessToken),
  }).then(() => {
    console.log(accessToken);
  });
};

export {
  login,
  signup,
  getUserFromId,
  passwordReset,
  loginUsingToken,
  userLogout,
  logoutUser,
};
