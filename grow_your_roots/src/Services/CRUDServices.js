import Parse from "parse";

// CREATE operation - new plant with Name
export const createPlant = (name, light, water, fertilizer, category, size ) => {
  console.log("Creating: ", name);
  const Plant = Parse.Object.extend("Plant");
  const plant = new Plant();
  // using setter to UPDATE the object
  plant.set("plant_id", name);
  plant.set("light", light);
  plant.set("water", water);
  plant.set("fertilizer", fertilizer);
  plant.set("category", category);
  plant.set("size", size);
  //plant.set("image", Name);  //Have to figure out how to set/fetch/update images uploaded by user

  return plant.save().then((result) => {
    // returns new plant object
    return result;
  });
};

// READ operation - get plant by ID
export const getById = (id) => {
  const Plant = Parse.Object.extend("Plant");
  const query = new Parse.Query(Plant);
  return query.get(id).then((result) => {
    // return Plant object with objectId: id
  return result;
  });
};

// READ operation - get all plants in Parse class Plant
export const getAllPlants = () => {
  const Plant = Parse.Object.extend("Plant");
  const query = new Parse.Query(Plant);
  return query.find().then((results) => {
    // returns array of Plant objects
    return results;
  });
};

// UPDATE operation - update plant by ID
export const updatePlant = (idOld, idNew) => {
  const Plant = Parse.Object.extend("Plant");
  const query = new Parse.Query(Plant);
  return query.get(idOld).then((plant) => {
    plant.update(idNew);
  });
};

// DELETE operation - remove plant by ID
export const removePlant = (id) => {
  const Plant = Parse.Object.extend("Plant");
  const query = new Parse.Query(Plant);
  return query.get(id).then((plant) => {
    plant.destroy();
  });
};
