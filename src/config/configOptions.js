import { AUTH } from "./constants";

export const configOptions = (option) => {
  switch (option) {
    case AUTH.LOGIN:
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        window.location.replace("/");
      }
      break;

    case AUTH.LOGOUT:
      localStorage.removeItem("uid");
      window.location.replace("/");
      break;
    default:
      break;
  }
};
