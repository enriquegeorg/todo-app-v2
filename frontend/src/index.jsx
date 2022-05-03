import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./main/app";

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App tab="home" />);