import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SignIn from "./views/SignIn";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Game from "./views/Game/Game";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  </BrowserRouter>
);
