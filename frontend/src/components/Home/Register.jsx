import React, { useState } from "react";
import "./Register.css";
import axios from 'axios'
import Navbar from "./Navbar";

const Register = () => {
const [formData, setFormData] = useState({
    fname: "",
    username:"",
    email: "",
    password: "",
    confirm_password: "",
});

const[message, setMessage] = useState("");
const handleChange = (e) =>{
  const {name, value} = e.target;
  setFormData({...formData,[name]:value})
}
const handleRegister = async(e) => {
  e.preventDefault();

  try{
    const response = await axios.post("http://127.0.0.1:8000/register/",formData,{
      headers:{
        "Content-Type": "application/json",
      },
    });
    if(response.status === 201){
      setMessage("Registration successful!");
    }else {
      setMessage("Something went wrong.");
    }
  }catch (error) {
    console.log("Error Response:", error.response.data);
    setMessage(error.response?.data?.detail || "An error occurred.");
  }

}



  return (
  <div className="register">
    <Navbar />
    
      <div className="register__container">
        <h2 className="register__title">Register</h2>
        {message && (
          <p className={`message ${message === "Registration successful!" ? "success" : "error"}`}>
              {message}
          </p>
        )}
        <form className="register__form" onSubmit={handleRegister}>
          <div className="register__form-group">
            <label htmlFor="name" className="register__label">Name:</label>
            <input
              type="text"
              id="name"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Enter your name"
              className="register__input"
            />
          </div>
          <div className="register__form-group">
            <label htmlFor="email" className="register__label">UserName:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="register__input"
            />
          </div>
          <div className="register__form-group">
            <label htmlFor="email" className="register__label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="register__input"
            />
          </div>
          <div className="register__form-group">
            <label htmlFor="password" className="register__label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="register__input"
            />
          </div>
          <div className="register__form-group">
            <label htmlFor="confirm-password" className="register__label">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm_password"
              value={formData.confpassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="register__input"
            />
          </div>
          <button type="submit" className="register__button">Register</button>
        </form>
        <p className="register__login">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  
  );
};

export default Register;
