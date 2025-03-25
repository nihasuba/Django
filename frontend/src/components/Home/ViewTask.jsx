import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar1 from "./Navbar1";
import "./viewtask.css"; 
import { useNavigate } from "react-router-dom";

const ViewTask = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = sessionStorage.getItem("access");
      console.log(token);
      if (!token) {
        console.error("User not logged in!");
        return;
      }

      const response = await axios.get("http://127.0.0.1:8000/tasks/view", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.title);
      console.log(response.data.id);
      setTasks(response.data);

    } catch (error) {
      console.error("Error fetching tasks:", error);
      // try {
      //   const refreshToken = sessionStorage.getItem("refresh_token");
      //   const refreshResponse = await axios.post("http://127.0.0.1:8000/api/token/refresh/", {
      //     refresh: refreshToken,
      //   });

      //   const newAccessToken = refreshResponse.data.access;
      //   sessionStorage.setItem("access", newAccessToken);

      //   // Retry fetching tasks with new token
      //   const retryResponse = await axios.get("http://127.0.0.1:8000/tasks/view", {
      //     headers: {
      //       Authorization: `Bearer ${newAccessToken}`,
      //     },
      //   });

      //   setTasks(retryResponse.data);
      // } catch (refreshError) {
      //   console.error("Error refreshing token:", refreshError);
      // }
    }
  };

  const handleEdit = async(taskId) => {
    if(!taskId) {
      console.error("Error: taskId is undefined!");
      return;
    }
    navigate(`/edit-task/${taskId}`);
  }

  const handleDelete = async (taskId) => {
    const confirmdel= window.confirm("Are you sure want to delete this task ?")
    if(confirmdel){
      try {
    
        const token = sessionStorage.getItem("access");
        if (!taskId) {
          console.error("taskId is undefined!");
          return;
        }
    
        await axios.delete(`http://127.0.0.1:8000/tasks/delete/${taskId}/`, {
          headers: { Authorization: `Bearer ${token}` }
        });
    
        setTasks(tasks.filter(task => task.id !== taskId));  // Remove deleted task from UI
        console.log("Task deleted successfully!");
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
    
  };
  

  return (
    <>
      <Navbar1 />
      <div className="view-task-container">
        <h2 className="view-task-heading">Task List</h2>
        <div className="task-table-container">
          <table className="task-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>User</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.user}</td>
                    <td>
                      <button className="task-edit-btn" onClick={() =>handleEdit(task.id)}>Edit</button>
                      <button className="task-delete-btn" onClick={() =>handleDelete(task.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-tasks-message">
                    No tasks found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewTask;
