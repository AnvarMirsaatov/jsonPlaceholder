import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import User from "./Pages/user";
import UserDetail from "./Pages/user-detail";
import { useEffect } from "react";

const App = () => {
  return (
    <div className="flex justify-start">
      <aside className="min-w-[240px] bg-[#141329] h-[100vh] flex flex-col justify-start p-[20px]">
        <Link to="/">Home</Link>
        <Link to="/user">user</Link>
        <Link to="/user-detail">User Detail</Link>
      </aside>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user-detail" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default App;
