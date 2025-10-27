// Import Modules
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useDispatch } from "react-redux";

//Import CSS
import styles from "./RegistrationForm.module.css";

// Component Function
function RegistrationForm() {

    // Define User State from AuthProvider
    const { register } = useAuth();

    // Redux Variables
    const dispatch = useDispatch();

    // Define Local State
    const [registerFirstName, setRegisterFirstName] = useState("");
    const [registerLastName, setRegisterLastName] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");
    const [message, setMessage] = useState("");

    // Register Button Handler
    const handleRegister = async () => {
        try {

            // Register Authentication
            // const newUser = await register( registerEmail, registerPassword );

            // Create User Record in Firestore
            dispatch({ type: "CREATE_USER", 
                payload: { email: registerEmail, first_name: registerFirstName, last_name: registerLastName } 
            });

            setRegisterFirstName("");
            setRegisterLastName("");
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

                {/* First Name */}
                <div>
                    <input
                        type="first_name"
                        placeholder="First Name"
                        value={registerFirstName}
                        onChange={(e) => setRegisterFirstName(e.target.value)}
                        required
                    />
                </div>

                {/* Last Name */}
                <div>
                    <input
                        type="last_name"
                        placeholder="Last Name"
                        value={registerLastName}
                        onChange={(e) => setRegisterLastName(e.target.value)}
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Confirm Password */}
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