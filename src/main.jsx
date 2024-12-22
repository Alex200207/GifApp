// import React from "react";
import ReactDom from "react-dom/client";
import GitExpertApp from "./GitExpertApp";
import "./style.css";

ReactDom.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>{/*strictmode ayuda a identifcar componentes con fallas*/}
    <GitExpertApp/>
  /* </React.StrictMode> */
);
