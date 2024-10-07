import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });

  const handleSignup = (e) => {
    e.preventDefault();

    // Store the data in session storage
    sessionStorage.setItem("user", JSON.stringify({ name, email }));

    alert("Signup successful! You can now log in.");
  };

  // Real-time name validation
  const handleNameChange = (e) => {
    const value = e.target.value;
    const nameRegex = /^[a-zA-Z\s]*$/; // Allows only alphabets and spaces
    if (!nameRegex.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name must contain only alphabets." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
    setName(value);
  };

  // Real-time email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter a valid email." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
    setEmail(value);
  };

  // Real-time password validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must include letters, numbers, and special characters.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
    setPassword(value);
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit" disabled={errors.name || errors.email || errors.password}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
