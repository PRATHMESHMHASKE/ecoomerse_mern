import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProductPage from "./ProductPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <nav className="bg-blue-600 p-4 w-full text-center text-white">
          <Link to="/signin" className="px-4">Sign In</Link>
          <Link to="/signup" className="px-4">Sign Up</Link>
          <Link to="/products" className="px-4">Products</Link>
        </nav>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
