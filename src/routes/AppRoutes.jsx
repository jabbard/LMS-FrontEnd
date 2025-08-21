import React from "react";
import { Routes, Route } from "react-router-dom";
import { 
    HomePage, 
    ReviewsPage,
    DashboardPage,
    EditBookPage 
} from "../pages/index";

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