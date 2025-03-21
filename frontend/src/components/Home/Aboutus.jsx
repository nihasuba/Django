import React from "react";
import "./aboutus.css";
import Navbar from "./Navbar";

const Aboutus = () => {
return (
<>
<Navbar />
    <div className="about-container">
      <h1>About Task Manager</h1>
      <p>
        Task Manager is a powerful tool designed to help individuals and teams
        stay organized, boost productivity, and efficiently manage tasks.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to provide an easy-to-use, intuitive platform that makes
        task management seamless and stress-free.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>✔ Easy task creation and tracking</li>
        <li>✔ Intuitive and user-friendly interface</li>
        <li>✔ Secure and reliable</li>
        <li>✔ Seamless collaboration for teams</li>
      </ul>
    </div>
</>
);
};

export default Aboutus;
