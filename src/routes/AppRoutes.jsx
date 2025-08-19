import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ReviewsPage from "../pages/reviews/ReviewsPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>

        {/* public pages */}
        <Route path="/" element={<HomePage />} />

        {/* private pages */}
        <Route path="/reviews" element={<ReviewsPage />} />

      </Routes>
    </div>
  );
}

export default AppRoutes;