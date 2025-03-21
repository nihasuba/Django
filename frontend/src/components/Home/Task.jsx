import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar1 from './Navbar1';

const Task = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get("username");
  const email = queryParams.get("email");

  return (
    <>
    <Navbar1 />
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Email: {email}</p>
      <p>Here are your tasks:</p>
    </div>
    </>
  )
}

export default Task