"use client";
import React from "react";
import useAuthStore from "@/zustand/store";

// Define User's role type explicitly
type UserRole = "admin" | "analyst" | "inventory manager";

const AuthTestComponent = () => {
  const { user,  logout } = useAuthStore();

 

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Auth Store Test</h1>
      {/* <button onClick={handleLogin}>Login as Admin</button> */}
      <button onClick={handleLogout}>Logout</button>

      {user ? (
        <div>
          <h2>Logged in as: {user.fullName}</h2>
          <p>Role: {user.role}</p>
          <p>Permissions:</p>
          <ul>
            <li>Delete: {user.permissions.delete ? "Yes" : "No"}</li>
            <li>View: {user.permissions.view ? "Yes" : "No"}</li>
            <li>Edit: {user.permissions.edit ? "Yes" : "No"}</li>
          </ul>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
  );
};

export default AuthTestComponent;
