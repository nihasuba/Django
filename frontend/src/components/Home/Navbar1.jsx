import React from 'react';
import './navbar.css';
import Logout from './Logout';

const Navbar1 = () => {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
          <h1>Task Manager</h1>
        </div>
        <ul className="navbar__links">
          <li><a href="/add-task">Add Task</a></li>
          <li><a href="/view-task">View Task</a></li>
          <li><Logout /></li>
        </ul>
        
      </nav>
  );
};

export default Navbar1;
