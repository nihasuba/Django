import React, { useState } from "react";
import "./Login.css";
import axios from'axios'
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {

    e.preventDefault();
    console.log("Logging in with:", formData);

    try {
        const response = await axios.post("http://127.0.0.1:8000/login/", formData, {
          headers: { "Content-Type": "application/json" },
        });


      console.log(response);

      if (response?.status === 200) {
          const userdata = response.data;
          setMessage("Login successful!");
          console.log("Tokens received:", response.data.tokens);

          localStorage.setItem("access_token", response.data.tokens.access);
          localStorage.setItem("refresh_token", response.data.tokens.refresh);

          sessionStorage.setItem("access", response.data.tokens.access);
          sessionStorage.setItem("user_id", response.data.user.id);
          sessionStorage.setItem("email", response.data.user.email);
          sessionStorage.setItem("Username", response.data.user.username);
          sessionStorage.setItem("user", JSON.stringify(response.data));
          
          console.log("Access Token Stored:", sessionStorage.getItem("access"));
          
          if(userdata?.superuser === false){
            setMessage("Login successfully");
            //window.location.href = "/task"; when use session
            //navigate(`/task?username=${userdata.user.username}&email=${userdata.user.email}`) 
            setTimeout(() => {
              navigate("/dashboard");
            }, 1000);
            
            //window.location.href = "/dashboard";
          }else{
            window.location.href = "/admin"; 
        }
        
      } else {
        setMessage("Something went wrong.");
      }
    } catch (error) {
        console.error("Error response:",error);
        setMessage(error.response.data?.details);
      }
  };


return (
  <div className="login">
    <Navbar />
    
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {message && (
          <p className={`message ${message === "Login successfully" ? "success" : "error"}`}>
              {message}
          </p>
        )}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-form-group">
            <label htmlFor="text" className="login-label">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="login-input"
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password" className="login-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-register">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  


);
};

export default Login;
