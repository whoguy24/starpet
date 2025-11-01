// Import Modules
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

//Import CSS
import styles from "./RegistrationForm.module.css";

// Component Function
function RegistrationForm() {
  // Initialize Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => state.auth.status);

  // Define Local State
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState("");

  useEffect(() => {
    if (authStatus === "authenticated") {
      alert("Your account has been created.");
      navigate("/", { replace: true });
    }
  }, [authStatus]);

  // Register Button Handler
  const handleRegister = async () => {
    try {
      // Register User in Firebase
      const registeredUser = await register(registerEmail, registerPassword);
      const authUserID = registeredUser.user.uid;

      // Create User Record
      dispatch({
        type: "CREATE_USER",
        payload: {
          authUserID: authUserID,
          first_name: registerFirstName,
          last_name: registerLastName,
          email: registerEmail,
          role: "User",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Render DOM
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
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </div>

        {/* Login Page Link */}
        <div>
          <Link to="/login" className={styles.textLink}>
            Back to Login
          </Link>
        </div>
      </form>
    </>
  );
}

// Export Component
export default RegistrationForm;
