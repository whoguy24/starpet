// Import Modules
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";

//Import CSS
import styles from "./LoginForm.module.css";

// Component Function
function LoginForm() {

    // Define User State from AuthProvider
    const { user, login, logOut } = useAuth();

    // Define Local State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Log In Button Handler
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await login(email, password);
            console.log(`Logged in successfully: ${userCredential.user.email}`)
        } catch (err) {
            console.log("There was an issue.", err)
        }
    };

    // Check Authentication Status Button Handler
    const handleStatus = () => {
        if (user?.email) {
            console.log("Current username:", user.email);
        }
        else {
            console.log("No users are logged in.");
        }
    };

    // Log User Out Button Handler
    const handleLogout = async () => {
        try {
           await logOut();
            console.log("User logged out successfully.");
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <>
            {/* Title */}
            <h2>Welcome to StarPet</h2>

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
                    <button type="submit" >
                        Log In
                    </button>
                </div>

                {/* (Authentication) Status Button */}
                <div>
                    <button type="button" onClick={handleStatus}>
                        Status
                    </button>
                </div>

                {/* Log Out Button */}
                <div>
                    <button type="button" onClick={handleLogout}>
                        Log Out
                    </button>
                </div>

            </form>
        </>
    )

}

// Export
export default LoginForm















