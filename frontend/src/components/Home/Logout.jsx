import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      axios.post(
        "http://127.0.0.1:8000/logout/", 
        {},  // No body needed
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
          }
        }
      )
      
      // Clear tokens stored in localStorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    
      // Optionally, clear sessionStorage or any other persistent storage used
      sessionStorage.removeItem("user");
    
      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
    
  }    

  return (
    <button onClick={handleLogout} style={{ padding: "7px", background: "red", color: "white", border: "none", cursor: "pointer" }}>
      Logout
    </button>
  );
};

export default Logout;
