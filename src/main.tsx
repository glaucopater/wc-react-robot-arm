import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import r2wc from "@r2wc/react-to-web-component";
import "./main.css";
import "./index.css";
import { worker } from "./mocks/browser";
import * as appPackage from "../package.json";

export const WebReminders = r2wc(App);

if (
  import.meta.env.MODE === "development" &&
  import.meta.env.VITE_ENABLE_MSW === "true"
) {
  worker.start();
}

if (import.meta.env.MODE === "production") {
  console.info("web-reminders mfe is connected ver:", appPackage.version);
  customElements.define("web-reminders", WebReminders);
} else {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
