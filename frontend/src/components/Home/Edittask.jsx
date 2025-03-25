import React, { useEffect, useState } from "react";
import axios from "axios";
import "./addtask.css";
import Navbar1 from "./Navbar1";
import { useNavigate, useParams } from "react-router-dom";

const Edittask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const[title, setTitle] = useState();
  const[description, setDescription] = useState();
  const [message, setMessage] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  console.log(id);

useEffect(() => {
    const fetchtaskDetails = async() =>{
        try {
            const token = sessionStorage.getItem("access");
            if (!token) {
              alert("Session expired. Please log in again.");
              navigate("/login");
              return;
            }

        const response = await axios.get(`http://127.0.0.1:8000/tasks/view/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTask(response.data);
        console.log(task)
        } catch (error) {
            console.log("Error fetching task details:", error)
        }
    };
    fetchtaskDetails();
},[id, navigate]);



  const handleUpdate = async (e) => {
    e.preventDefault();

    
    try{
    let token = sessionStorage.getItem("access");
    const someUserId = sessionStorage.getItem("user_id"); 
    if (!token) {
      alert("Session expired. Please log in again.");
      navigate("/login");
      return;
    }
    const updatedTask = {
      title: task.title,
      description: task.description,
      user: someUserId // Replace someUserId with actual logged-in user ID
  };
    console.log(updatedTask);
    console.log("Retrieved Token:", token); // Debugging step

    await axios.put(`http://127.0.0.1:8000/tasks/edit/${id}/`, updatedTask, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Task updated successfully!");
      navigate("/view-task"); // Redirect back to ViewTask page
    
    
    } catch (error) {
        console.error("Error updating task:", error);
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
      <h2>Edit Task</h2>
      {message && (
          <p className={`message ${message === "Task Added successful!" ? "success" : "error"}`}>
              {message}
          </p>)}
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={(e)=> setTask({...task,title:e.target.value})}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={(e) => setTask({...task,description:e.target.value})}
          required
        />
        <button type="submit">Update Task</button>
      </form>
      
    </div>
    </>
  );
};

export default Edittask;
