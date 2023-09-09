import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { DonateApp } from "./DonateApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <StrictMode>
      <DonateApp />
    </StrictMode>
  );
