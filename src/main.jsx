import React from "react";
import ReactDOM from "react-dom/client";

function TestApp() {
  return <h1 style={{ padding: "40px" }}>TEST APP WORKING 🎉</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>
);
