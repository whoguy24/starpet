// Import Modules
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

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
    const [message, setMessage] = useState(user?.email ? `Currently logged in as: ${user.email}` : "" );

    // Log In Button Handler
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await login(email, password);
            console.log(`Logged in successfully: ${userCredential.user.email}`)
            navigate("/");
        } catch (err) {
            setMessage("Log in Failed.");
            console.log(message, err);
        }
    };

    // Check Authentication Status Button Handler
    const handleStatus = () => {
        if (user?.email) {
            setMessage(`Currently logged in as: ${user.email}`);
            console.log(message);
        }
        else {
            setMessage("No users are logged in.");
            console.log(message);
        }
    };

    // Log User Out Button Handler
    const handleLogout = async () => {
        try {
           await logOut();
            setMessage("User logged out successfully.");
            setEmail("");
            setPassword("");
            console.log(message);
        } catch (err) {
            setMessage("Log out failed.");
            console.error(message, err);
        }
    };

    // Log User Out Button Handler
    function handleNavigate(path) {
        navigate(path);
    }

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

                {/* Only Show if Logged In */}
                { user &&
                    <>

                        {/* Log Out Button */}
                        <div>
                            <button type="button" onClick={handleLogout}>
                                Log Out
                            </button>
                        </div>

                        {/* Go to Home Page Button */}
                        <div>
                            <button type="button" onClick={()=>(handleNavigate("/"))}>
                                Home Page
                            </button>
                        </div>

                    </>
                }

                {/* Go to Registration Button */}
                <div>
                    <button type="button" onClick={()=>(handleNavigate("/register"))}>
                        Register
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















