import React from "react";
import Navbar1 from "./Navbar1";
import "./dashboard.css"; 

const Dashboard = () => {
  //let username = sessionStorage.getItem("username") || "Guest";
  //let email = sessionStorage.getItem("email") || "Not Available";
  let token = sessionStorage.getItem("access");
  let userid = sessionStorage.getItem("user_id");
  let email = sessionStorage.getItem("email");
  let Username = sessionStorage.getItem("Username");
    console.log(Username);

  return (
    <>
      <Navbar1 />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Welcome, {Username}!</h1>
        <p className="dashboard-subtitle">Manage your tasks efficiently.</p>
        <div className="dashboard-info">
        <p><strong>User_Name:</strong> {Username}</p>
          <p><strong>User_Id:</strong> {userid}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

