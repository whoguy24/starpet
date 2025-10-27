import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Link } from "react-router-dom";

//Import CSS
import styles from "./ResetPasswordForm.module.css";

export default function ResetPassword() {

  // Define Local State
  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState("");

  // Define User State from AuthProvider
  const { resetPassword } = useAuth();

  // Reset Password Button Handler
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword( resetEmail );
      setMessage(`Reset password email was sent to ${resetEmail}. (Please check your spam folder)`)
    } catch (err) {
      setMessage("There was a problem resetting password:", err)
    };
  };

    // Render DOM
  return (

    <div>

      {/* Web Form */}
      <form className={styles.resetPasswordForm} onSubmit={handleResetPassword}>

        {/* Reset Email Field */}
        <div>
          <input
          type="email"
          placeholder="Enter your email"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          required
          />
        </div>

        {/* Reset Button */}
        <div>
          <button type="form">Send Reset Link</button>
        </div>

      </form>

      <div>

        {/* Status Message */}
        {message && <p>{message}</p>}

      </div>

      <div>

        {/* Back to Login Link */}
        <Link className={styles.backToLogin} to="/login">Back to Login</Link>

      </div> 


    </div>

  );
}