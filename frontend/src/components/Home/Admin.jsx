import React from 'react';
import Navbar1 from './Navbar1';


const Admin = () => {
  const userData = JSON.parse(sessionStorage.getItem("user"));
  const username = userData?.user.username;
  const email = userData?.user.email;

    return (
      <>
        <Navbar1 />
        <div className="container text-center mt-5">
            <h1>Welcome {username} to Admin Page</h1>
            <p>Manage your tasks efficiently.</p>
        </div>
      </>
    );
};

export default Admin;
