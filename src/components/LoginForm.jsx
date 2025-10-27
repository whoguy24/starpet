// Import Modules
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

//Import CSS
import styles from "./LoginForm.module.css";

// Component Function
function LoginForm() {

    // Define React Router Functions
    const navigate = useNavigate();

    // Define User State from AuthProvider
    const { user, login, logOut } = useAuth();

    // Define Local State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    // Log In Button Handler
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await login(email, password);
            setMessage(`Logged in successfully: ${userCredential.user.email}`);
            navigate("/");
        } catch (err) {
            setMessage("Log in Failed.");
            console.log(err);
        }
    };

    // Check Authentication Status Button Handler
    const handleStatus = () => {
        if (user?.email) {
            setMessage(`Currently logged in as: ${user.email}`);
        }
        else {
            setMessage("No users are logged in.");
        }
    };

    // Log User Out Button Handler
    const handleLogout = async () => {
        try {
           await logOut();
            setMessage("User logged out successfully.");
            setEmail("");
            setPassword("");
        } catch (err) {
            setMessage("Log out failed.");
            console.log(err);
        }
    };

    // Log User Out Button Handler
    function handleNavigate(path) {
        navigate(path);
    }

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

                <div>
                    <Link to="/forgot_password" className={styles.forgotPasswordLink}>Forgot your Password?</Link>
                </div>

                {/* Log In Button */}
                <div>
                    <button type="submit" >
                        Log In
                    </button>
                </div>

                {/* Authentication Status Message */}
                <div>
                    <p>{message}</p>
                </div>

            </form>
            
        </>
    )

}

// Export
export default LoginForm;















