import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";

const AppRouter = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/newblog" element={<NewBlog />} />
        </Routes>
    </Router>
  )
}

export default AppRouter