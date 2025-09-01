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
  UserPage,
  Books,
  Profile,
  BorrowPage 
} from "../pages/index";
import DefaultLayout from "../components/layouts/DefaultLayout";
import UserLayout from "../components/layouts/UserLayout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage/>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="forget-password" element={< ForgetPassword />} />
        </Route>

        {/* Protected Pages */}
        <Route path="/user" element={<UserLayout/>}>
          <Route index element={< DashboardPage />} />
          <Route path="books" element={<Books/>} />
          <Route path="new-book" element={<NewBookPage/>} />
          <Route path="edit-book" element={<EditBookPage/>} />
          <Route path="book-landing" element={<BookLandingPage/>} />
          <Route path="reviews" element={<ReviewsPage/>} />
          <Route path="user-list" element={<UserPage/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="borrow" element={<BorrowPage/>} />
          {/* <Route path="borrow" element={<  />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
