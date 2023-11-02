import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckId from "./routes/member/CheckId";
import Login from "./routes/member/Login";
import Signin from "./routes/member/Signin";
import ForgetPw from "./routes/member/ForgetPw";
import Pwchange from "./routes/member/PwChange";
import Dialogue from "./routes/page/Dialogue";
import Main from "./routes/page/Main";
import Mission from "./routes/page/Mission";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckId />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgetpw" element={<ForgetPw />} />
          <Route path="/pwchange" element={<Pwchange />} />
          <Route path="/main" element={<Main />} />
          <Route path="/dialogue" element={<Dialogue />} />
          <Route path="/mission" element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
