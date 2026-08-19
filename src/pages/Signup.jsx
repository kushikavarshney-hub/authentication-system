import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if(!name ||!email ||!password){
      alert("Please fill in all fields.");
      return;
    }
    if(password.length<6){
      alert("Password must be at least 6 characters.");
      return;
    }
    const user={
      name:name,
      email:email,
      password:password,
    };
    localStorage.setItem("user",JSON.stringify(user));
    alert("Account created successfully!");
    navigate("/");
  };
  return(
    <div className="auth-container">
      <div className="auth-card">
        <p className="auth-subtitle">Create an account to get started.</p>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Create password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-link">Already have an account?{""}<Link to="/">Login</Link></p>
      </div>
    </div>
  );
}
export default Signup;
