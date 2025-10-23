import { useState } from "react";
import loginUser from "../scripts/login.js";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginUser(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  function checkLogin() {
        const user = auth.currentUser;
            if (user) {
            console.log(`${user.email} is logged in.`);
            } else {
            console.log("No user is logged in.");
            }
  }

    const logOut = async () => {
    try {
        await signOut(auth);
        console.log("User logged out successfully.");
    } catch (error) {
        console.error("Error logging out:", error);
    }
    };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "2rem" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
        />
        <button type="submit" >
          Login
        </button>
      </form>

        <button onClick={checkLogin}>
            Status
        </button>

        <button onClick={logOut}>
          Log Out
        </button>

    </div>

  );
};

export default Login;