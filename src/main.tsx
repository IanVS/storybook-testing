import React from "react";
import ReactDOM from "react-dom/client";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";
import App from "./screens/app/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
);
