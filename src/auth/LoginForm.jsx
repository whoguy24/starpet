// Import Modules
import { useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

// Import Scripts
import loginUser from "../scripts/loginUser.js";

//Import CSS
import styles from "./LoginForm.module.css";

// Component Function
function LoginForm() {

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
                    <button onClick={checkLogin}>
                        Status
                    </button>
                </div>

                {/* Log Out Button */}
                <div>
                    <button onClick={logOut}>
                        Log Out
                    </button>
                </div>

            </form>
            
        </>
    )

}

// Export
export default LoginForm















