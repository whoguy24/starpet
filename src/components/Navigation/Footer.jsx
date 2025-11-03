// Import Modules
import styles from "./Footer.module.css";

// Component Function
function Footer() {
  // Render DOM
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span>© 2025 Barbara O'Brien Photography</span>
      </div>
    </footer>
  );
}

// Export Component Function
export default Footer;
