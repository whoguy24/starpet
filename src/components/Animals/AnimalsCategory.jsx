// Import Modules
import { Link } from "react-router-dom";
import styles from "./AnimalsCategory.module.css";

// Component Function
function AnimalsCategory() {
  // Define Animal Categories
  const categories = [
    { name: "Dogs", route: "dogs" },
    { name: "Cats", route: "cats" },
    { name: "Horses", route: "horses" },
    { name: "Livestock", route: "livestock" },
    { name: "Wildlife", route: "wildlife" },
    { name: "Exotic", route: "exotic" },
  ];
  // Render DOM
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.header}>Animals</h2>
        <div className={styles.links}>
          {categories.map((category, index) => (
            <Link key={category.route} to={`/animals/${category.route}`}>
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export Component Function
export default AnimalsCategory;
