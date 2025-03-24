// src/SignUp.js
import React from "react";
const SignUp = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <input type="text" placeholder="Name" className="border p-2 w-full my-2" />
      <input type="email" placeholder="Email" className="border p-2 w-full my-2" />
      <input type="password" placeholder="Password" className="border p-2 w-full my-2" />
      <button className="bg-green-500 text-white p-2 w-full rounded">Sign Up</button>
    </div>
  );
};
export default SignUp;