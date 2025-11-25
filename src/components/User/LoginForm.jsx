// Import Modules
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Import CSS
import styles from "./LoginForm.module.css";

// Component Function
function LoginForm() {
    // Initialize Hooks
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Initialize Local State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Initialize Global State
    const { status } = useSelector((state) => state.auth);

    // Automatically Navigate to Dashboard if Authenticated
    useEffect(() => {
        if (status === "AUTHENTICATED") {
            navigate("/", { replace: true });
        }
    }, [status]);

    // Log In Button Handler
    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch({
            type: "AUTH_LOGIN",
            payload: { email, password },
        });
    };

    // Render DOM
    return (
        <div className={styles.container}>
            <h2>Welcome to StarPet!</h2>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

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

                {/* Forgot Password Link */}
                <div>
                    <Link to="/forgot_password" className={styles.textLink}>
                        Forgot your Password?
                    </Link>
                </div>

                {/* Register Link */}
                <div>
                    <Link to="/register" className={styles.textLink}>
                        Register New Account
                    </Link>
                </div>
            </form>
        </div>
    );
}

// Export Component
export default LoginForm;
