import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <HashRouter>
        <Provider store={store}>
            <GoogleOAuthProvider clientId="281550699425-ahuqjq9h6ic0utkmmdsofl7i8gdc894s.apps.googleusercontent.com">
                <App />
            </GoogleOAuthProvider>
        </Provider>
    </HashRouter>
    // </React.StrictMode>
);

reportWebVitals();
