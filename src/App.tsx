import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./layouts/signin";
import SignUp from "./layouts/Signup";
import Navbar from "./components/navbar";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Dashboard from "./layouts/dashboard";
import PrivateRoute from "./components/privateroute";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<PrivateRoute Component={Dashboard} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
