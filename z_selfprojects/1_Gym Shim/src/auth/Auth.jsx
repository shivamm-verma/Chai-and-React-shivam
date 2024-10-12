import React from "react";

// contains all Auth files:- login, logout, profile
function Login() {
  return (
    <>
      <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
        Gradient
      </button>
    </>
  );
}
function Logout() {
  return <></>;
}
function Profile() {
  return <></>;
}

export default { Login, Logout, Profile };
