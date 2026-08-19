import{useState}from "react";
import{Link,useNavigate}from "react-router-dom";
import "../App.css";
function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        const savedUser=JSON.parse(localStorage.getItem("user"));
        if(!savedUser){
            alert("No account found. Please sign up first.");
            return;
        }
        if(email===savedUser.email && password===savedUser.password){
            alert("Login successfull!");
            navigate("/dashboard");
        }else{
            alert("Invalid email or password.");

        }
    };
    return(
        <div className="auth-container">
            <div classname="auth-card">
                <h1>Login</h1>
                <p classname="auth-sbtitle">Welcome back!Please login to continue.</p>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Enter email" value={email} onChange={ (e) => setEmail (e.target.value)}/>
                    <input type="password" placeholder="Enter password" value={password} onChange={ (e) => setPassword (e.target.value)}/>
                    <button type="submit">Login</button>
                </form>
                <p className="auth-link">Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>

        </div>
    );
}
export default Login;