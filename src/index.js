import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProfileProvider from "./contexts/profileContext";
import { BillProvider } from "./contexts/BillContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProfileProvider>
    <BillProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BillProvider>
  </ProfileProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
