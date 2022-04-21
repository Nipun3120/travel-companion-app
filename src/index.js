import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LoggedInContextProvider } from "./contexts/userLoggedInStatus";
import { CurrentUserContextProvider } from "./contexts/currentUserContext";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LoggedInContextProvider>
          <CurrentUserContextProvider>
            <App />
          </CurrentUserContextProvider>
        </LoggedInContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <LoggedInContextProvider>
//         <CurrentUserContextProvider>
//           <App />
//         </CurrentUserContextProvider>
//       </LoggedInContextProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
