import React, { useState } from "react";
import axios from "axios";
import "./addtask.css";
import Navbar1 from "./Navbar1";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(sessionStorage.getItem("access"));

    let token = sessionStorage.getItem("access");

    console.log("Retrieved Token:", token); // Debugging step

    const userId = sessionStorage.getItem('user_id');

    console.log("User Id:" , userId);
    if (!token || !userId) {
      console.error("User not logged in!");
      return;
  }
    const taskData = {
        title: task.title,
        description: task.description,
          // Set a default if required by Django
        user: userId,  // Send logged-in user ID (Kana's user ID)
    };

    console.log("Sending task data:", taskData); // Debugging step

    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/tasks/add/",
            taskData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(response);
        console.log("Task added:", response.data);
        if(response.status === 201){
          setMessage("Task Added successful!");
          setTimeout(() => {
            navigate("/view-task");
          }, 1000);
          
        }else {
          setMessage("Something went wrong.");
        }
    } catch (error) {
        console.error("Error adding task:", error.response ? error.response.data : error);
    }
};



  // const refreshToken = async () => {
  //   try {
  //       const refreshToken = localStorage.getItem("refresh_token");

  //       if (!refreshToken) {
  //           console.error("No refresh token found. Please log in again.");
  //           return null;
  //       }

  //       const response = await axios.post("http://127.0.0.1:8000/token/refresh/", {
  //           refresh: refreshToken,
  //       });

  //       const newAccessToken = response.data.access;
  //       localStorage.setItem("access_token", newAccessToken);
  //       console.log("Access token refreshed:", newAccessToken);
  //       return newAccessToken; 
  //   } catch (error) {
  //       console.error("Error refreshing token:", error);
  //       alert("Session expired. Please log in again.");
  //       localStorage.clear();
  //       window.location.href = "/login"; // Redirect user to login
  //       return null;
  //   }
  // }

  return (
    <>
    <Navbar1 />
    <div className="add-task-container">
      <h2>Add Task</h2>
      {message && (
          <p className={`message ${message === "Task Added successful!" ? "success" : "error"}`}>
              {message}
          </p>)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      
    </div>
    </>
  );
};

export default AddTask;
