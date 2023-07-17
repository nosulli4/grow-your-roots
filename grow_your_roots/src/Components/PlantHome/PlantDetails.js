import React, { useEffect, useState } from "react";
import {
  getAllPlants,
  createPlant,
  removePlant
} from "../../Services/CRUDServices";
import PlantBox from "./PlantBox";

// PlantDetails component
// Reads in plant data asynchronously from back4app using CRUD function from services file
// Passes down this data to child component to display it
const PlantDetails = () => {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Asynchronously loading in the data
    getAllPlants().then((response) => {
      // updating plants variable with response from service
      setPlants(response);
    });
  }, []);

  return (
    <div>
      <h1>Learn about these plants:</h1>
      <div>
      {plants.length > 0 && (
        plants.map(
          (plant) => (<PlantBox plant={plant}/>)
        ))}
      </div>
    </div>
  );
};

export default PlantDetails;
