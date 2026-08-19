import{useNavigate}from "react-router-dom";
import "../App.css";
function Dashboard(){
    const navigate=useNavigate();
    const savedUser=JSON.parse(localStorage.getItem("user"));

    const handleLogout=()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
    };
    return(
            <div className="dashboard-container">
                <div className="dashboard-card">
                    <h1>Dashboard</h1>
            <h2>Welcome, {savedUser?.name || "User"}!</h2>
            <p>You are successfully logged in.</p>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        </div>
    );
}
export default  Dashboard;