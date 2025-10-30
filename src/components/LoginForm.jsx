// Import Modules
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Import CSS
import styles from "./LoginForm.module.css";

// Component Function
function LoginForm() {
  // Define Local State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authStatus === "authenticated") {
      navigate("/", { replace: true });
    }
  }, [authStatus]);

  // Log In Button Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({
      type: "AUTH_LOGIN",
      payload: { email, password },
    });
    navigate("/", { replace: true });
  };

  // Render DOM
  return (
    <>
      {/* Web Form */}
      <form className={styles.loginForm} onSubmit={handleLogin}>
        {/* Email Field */}
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Log In Button */}
        <div>
          <button type="submit">Log In</button>
        </div>

        <div>
          <Link to="/forgot_password" className={styles.textLink}>
            Forgot your Password?
          </Link>
        </div>

        <div>
          <Link to="/register" className={styles.textLink}>
            Register New User
          </Link>
        </div>
      </form>
    </>
  );
}

// Export
export default LoginForm;
