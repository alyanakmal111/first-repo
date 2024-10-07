import { useState } from "react";
import "./styles/forgotpassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    alert("Password reset link has been sent to your email!");
  };

  return (
    <div className="forget-page">
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
