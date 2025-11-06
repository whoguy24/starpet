// Import Modules
import styles from "./Breadcrumb.module.css";
import { Link } from "react-router-dom";

// Component Function
function Breadcrumb() {

  // Render DOM
  return <div className={styles.container}>
      <Link to={"/dashboard"}>Home</Link>
      <span>/</span>
      <Link to={"/animals"}>Animals</Link>
      <span>/</span>
      <Link to={"/animals/dogs"}>Dogs</Link>
      <span>/</span>
      <Link to={"/animals/dogs/1"}>Buddy</Link>
    </div>;

}

// Export Component Function
export default Breadcrumb;
