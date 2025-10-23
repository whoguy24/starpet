// Import Modules
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

//Import CSS
import styles from "./RegistrationForm.module.css";

// Component Function
function RegistrationForm() {

    // Define React Router Functions
    const navigate = useNavigate();

    // Define User State from AuthProvider
    const { user, login } = useAuth();

    // Define Local State
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");

    function handleRegister() {
        console.log("Yay");
        navigate("/");
    };

    function handleNavigate(path) {
        navigate(path);
    };

    return (
        <>

            {/* Web Form */}
            <form className={styles.registrationForm} onSubmit={handleRegister}>

                {/* Email Field */}
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password Field */}
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Confirm Password Field */}
                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={registerPasswordConfirm}
                        onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
                        required
                    />
                </div>

                {/* Register Button */}
                <div>
                    <button type="submit" onClick={handleRegister} >
                        Register
                    </button>
                </div>

                {/* Go to Login Button */}
                <div>
                    <button type="button" onClick={()=>(handleNavigate("/login"))} >
                        Back to Login
                    </button>
                </div>

            </form>
        </>
    );

};

// Export
export default RegistrationForm;



