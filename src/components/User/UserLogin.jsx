import LoginForm from "./LoginForm";
import styles from "./UserLogin.module.css";

function UserLogin() {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    );
}

export default UserLogin;
