// Import Modules
import { useState } from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

//Import CSS
// import styles from "./RegistrationForm.module.css";

// Component Function
function RegistrationForm() {

    // Define React Router Functions
    const navigate = useNavigate();

    // Define User State from AuthProvider
    const { user, login, logOut } = useAuth();

    // Define Local State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        </>
    )

}

// Export
export default RegistrationForm;



