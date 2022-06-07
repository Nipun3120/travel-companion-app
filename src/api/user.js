import axios from "axios";
import { BASE_URL } from "../config/api";

const login = async (data) => {
  console.log("---> ", data);
  fetch(`${BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      res.json().then((data) => {
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("uid", data.uid);
        window.location.replace("/");
      });
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

export { login, signup, getUserFromId };
