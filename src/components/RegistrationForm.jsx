// Import Modules
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";

//Import CSS
import styles from "./RegistrationForm.module.css";

// Component Function
function RegistrationForm() {

    // Define User State from AuthProvider
    const { register } = useAuth();

    // Define Local State
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
    const [message, setMessage] = useState("");

    // Register Button Handler
    const handleRegister = async () => {
        try {
            const newUser = await register(registerEmail, registerPassword);
            setRegisterEmail("");
            setRegisterPassword("");
            setRegisterPasswordConfirm("");
            setMessage(`Registered User: ${newUser.user.email}`);
        } catch (err) {
            setMessage("New User Registration Failed.");
        };
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
                    <button type="button" onClick={handleRegister} >
                        Register
                    </button>
                </div>

            </form>

            {/* Authentication Status Message */}
            <div>
                <p>{message}</p>
            </div>

        </>
    );

};

// Export Component
export default RegistrationForm;