import React from 'react';
import './Home.css';
import './Navbar.css';
import Navbar from './Navbar';

const Home = () => {
  return (
  <>
    <Navbar />
    <div className="home">
      <div className="home__content">
        <div className="home__text">
          <h2>Welcome to Task Manager</h2>
          <p>
            Discover and share reviews of your favorite books. Dive into a world of stories, insights, and experiences. Whether you're an avid reader or just getting started, this is the perfect place for you!
          </p>
          <button className="loginbutton" style={{ padding: "17px", color: "white", border: "none", cursor: "pointer" , margin:"auto"}}><a href="/login">Get Start</a></button> 
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
