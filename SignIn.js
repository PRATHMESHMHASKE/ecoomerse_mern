// src/SignIn.js
import React from "react";
const SignIn = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
      <h2 className="text-xl font-bold">Sign In</h2>
      <input type="email" placeholder="Email" className="border p-2 w-full my-2" />
      <input type="password" placeholder="Password" className="border p-2 w-full my-2" />
      <button className="bg-blue-500 text-white p-2 w-full rounded">Sign In</button>
    </div>
  );
};
export default SignIn;