import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Game from "./views/Game/Game";
import SignIn from "./views/SignIn";
import Register from "./views/Register";
import Lobby from "./views/Lobby";
import EditProfile from "./views/EditProfile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<SignIn />} />
      <Route path="/game" element={<Game />} />
      <Route path="/register" element={<Register />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/editprofile" element={<EditProfile />} />
    </Routes>
  </BrowserRouter>
);
