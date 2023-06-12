import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import r2wc from "@r2wc/react-to-web-component";

import * as appPackage from "../package.json";

export const WebRobotArm = r2wc(App);

if (import.meta.env.MODE === "production") {
  console.info("web-robot-arm mfe is connected ver:", appPackage.version);
  customElements.define("web-robot-arm", WebRobotArm);
} else {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
