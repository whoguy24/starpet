import { useState, useEffect } from "react";
import { useAuth } from "../auth/AuthProvider";

//Import CSS
import styles from "./RegistrationForm.module.css";

export default function ResetPassword() {

  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState("");

    // Define User State from AuthProvider
    const { resetPassword } = useAuth();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        console.log("Hi")
        try {
            await resetPassword( resetEmail );
            console.log("Success")
        } catch (err) {
            console.log("Failure")
        };
    };

    // Add Event Listener for Message
    // We do this so console.log doesn't fire before the async function resolves.
    useEffect(() => {
        if (message) console.log(message);
    }, [message]);

  return (
    <div>
      <form className={styles.resetPasswordForm} onSubmit={handleResetPassword}>

        <div>
            <input
            type="email"
            placeholder="Enter your email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            required
            />
        </div>

        <div>
            <button type="submit">Send Reset Link</button>
        </div>

      </form>
      {message && <p>{message}</p>}
    </div>
  );
}