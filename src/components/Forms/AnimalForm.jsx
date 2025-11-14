import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./AnimalForm.module.css";

import Autocomplete from '@mui/material/Autocomplete';

import { categories } from "../../enums/animals/categories";
import { breeds } from "../../enums/animals/breeds";

// Component Function
function AnimalForm() {

  // Define Local State
    const [category, setCategory] = useState(null);
    const [breed, setBreed] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit")
  };  

  function handleInput() {

  }

  // Render DOM
  return <div>
    <form className={styles.container} onSubmit={handleSubmit}>
      <Autocomplete
        disablePortal
        options={categories.dog}
        isOptionEqualToValue={(option, value) => option.key === value.key}
        sx={{ width: 300 }}
        value={category}
        onChange={(e, value) => setCategory(value)}
        renderInput={(params) => <TextField {...params} label="Category" />}
      />
      <Autocomplete
        disablePortal
        options={category ? breeds.dog[category.key] : []}
        getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.key === value.key}
        sx={{ width: 300 }}
        value={breed}
        onChange={(e, value) => setBreed(value)}
        renderInput={(params) => (
          <TextField {...params} label="Breed" />
        )}
      />
    </form>
  </div>;
}

// Export Component Function
export default AnimalForm;
