import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import UserProfile from "./User/User";
import Home from "./PlantHome/PlantHome";
import Blog from "./Blog/Blog";
import AuthModule from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./Auth/ProtectedRoute";
import Profile from "./User/UserProfile";
import AuthForgotPassword from "./Auth/AuthForgotPassword";
import UserPlantEdit from "./User/UserPlantEdit";
import UserProfileEdit from "./User/UserProfileEdit";

// Root components page that includes all routes and protected routes for the app
const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/users" element={
          <ProtectedRoute path="/users" element={UserProfile} /> }
        />
        <Route path="/users/profile" element={
          <ProtectedRoute path="/users/profile" element={Profile} /> } 
        />
        <Route path="/users/profile/edit" element={
          <ProtectedRoute path="/users/profile/edit" element={UserProfileEdit} /> } 
        />
        <Route path="/users/edit" element={
          <ProtectedRoute path="/users/edit" element={UserPlantEdit} /> } 
        />
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/auth/forgotPassword" element={<AuthForgotPassword />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;
