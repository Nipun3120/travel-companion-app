import { userLogout } from "../../api/user";
import { AUTH } from "../../config/constants";

export const logout = () => {
  // localStorage.removeItem("uid");
  // localStorage.removeItem("accessToken");
  // localStorage.removeItem("refreshToken");
  // window.location.replace("/");

  const accessToken = localStorage.getItem("accessToken");
  console.log("accessToken", accessToken);
  userLogout(accessToken, AUTH.LOGOUT);
};
