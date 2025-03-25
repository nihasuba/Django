import React from 'react';
import './Home.css';
import './Navbar.css';
import Navbar from './Navbar';
import "./Login.css";

const Home = () => {
  return (
  <>
    <Navbar />
    <div className="home">
      <div className="home__content">
        <div className="home__text">
          <h2>Quick and Easy To use, Anytime AnyWhere</h2>
          <p>
            Plan your Day Better, Get Your Life Organized Taskmate lets you keep Track of Your Task in One Place
          </p>
          <button className="loginbutton" ><a href="/login">Let's Get Started</a></button> 
        </div>
        <div className="home__image">
          <img src='/images/a.jpg' alt="tasks" />
        </div>
      </div>
    </div>
  </>
  );
};

export default Home;
