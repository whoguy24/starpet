// Import Modules
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./AnimalsGallery.module.css";
import { dummyAnimals } from "./dummies";

// Component Function
function AnimalsGallery() {
  const { category } = useParams();
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    setAnimals(dummyAnimals[category] || []);
  }, [category]);

  // Render DOM
  return (
    <div>
      {animals.map((animal) => (
        <Link key={animal.id} to={`/animals/${category}/${animal.id}`}>
          <h3>{animal.name}</h3>
        </Link>
      ))}
    </div>
  );
}

// Export Component Function
export default AnimalsGallery;
