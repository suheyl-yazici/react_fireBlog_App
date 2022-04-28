import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import Details from "../pages/Details";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/updateblog" element={<UpdateBlog />} />
            <Route element={<PrivateRouter />}>
                <Route path="/details" element={<Details />} />
                <Route path="/newblog" element={<NewBlog />} />
                <Route path="/profil" element={<Profile />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter