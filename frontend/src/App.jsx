import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer";
import Login from "./components/Home/Login";
import Register from "./components/Home/Register";
import Admin from "./components/Home/admin";
import Task from "./components/Home/Task";
import Aboutus from "./components/Home/Aboutus";
import Contactus from "./components/Home/Contactus";
import AddTask from "./components/Home/AddTask";
import Logout from "./components/Home/Logout";
import ViewTask from "./components/Home/ViewTask";
import Dashboard from "./components/Home/Dashboard";


function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/task" element={<Task/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/view-task" element={<ViewTask />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />

        
        
        
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
    
  );
}

export default App;
