import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage, 
  SignUpPage, 
  LoginPage, 
  ForgetPassword, 
  BookLandingPage, 
  EditBookPage,
  NewBookPage,
  DashboardPage, 
  ReviewsPage, 
  UserPage 
} from "../pages/index";
import DefaultLayout from "../components/layouts/DefaultLayout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="forget-password" element={< ForgetPassword />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
