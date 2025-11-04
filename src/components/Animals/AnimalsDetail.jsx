// Import Modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./AnimalsDetail.module.css";
import { dummyAnimals } from "./dummies";

// Component Function
function AnimalsDetail() {
  const { category, id } = useParams();
  const [animal, setAnimal] = useState(null);
  useEffect(() => {
    const found = dummyAnimals[category]?.find(
      (a) => a.id === parseInt(id) // use parseInt because useParams() returns a string
    );
    setAnimal(found || null);
  }, [category, id]);
  if (!animal) return <p>Loading...</p>;
  // Render DOM
  return (
    <div>
      <h2>{animal.name}</h2>
    </div>
  );
}

// Export Component Function
export default AnimalsDetail;
