import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, logoutUser } from "../api/user";

export const userLogin = createAsyncThunk("auth/userLogin", async (payload) => {
  if (payload) {
    const data = await login(payload);
    if (!data.ok) {
      return Promise.reject({ message: "login failed, try again !!" });
    }
    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      uid: data.uid,
    };
  } else {
    return Promise.reject({ message: "missing credentials" });
  }
});

export const userLogout = createAsyncThunk(
  "auth/userLogout",
  async (accessToken) => {
    if (accessToken) {
      const res = await logoutUser(accessToken);

      if (!res.ok) {
        return Promise.reject();
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    message: "",
    username: "",
    mobileNumber: "",
  },
  reducers: {
    setUserLogout: (state, action) => {
      state.isLoggedIn = false;
      localStorage.removeItem("uid");
    },
    setSearchMode: (state, action) => {
      state.searchMode = action.payload;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      state.message = action.payload.message;
      state.isLoggedIn = true;
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("uid", action.payload.uid);
      window.location.replace("/");
    },
    // [userLogin.rejected]: (state, err) => {
    // },
  },
});

export const { setUserLogout } = authSlice.actions;

export default authSlice.reducer;
