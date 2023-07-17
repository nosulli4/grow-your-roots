import React from "react";

const UserPlantForm = ({newUserPlant, onChange, onClick}) => {
  return (
    <div>
    <form id="AddPlantForm">
    <h3>Add a new plant to your collection:</h3>
    <label>Nickname: <input type="text" name="nickname" onChange={onChange} value={newUserPlant.nickname} required/></label>
    <br /><br />
    Plant Type:
    <select name="plant_id" onChange={onChange} value={newUserPlant.plant_id}>
      <option value="Pentas">Penta</option>
      <option value="Snake Plant">Snake Plant</option>
      <option value="Lantana">Lantana</option>
      <option value="Pothos">Pothos</option>
      <option value="Coleus">Coleus</option>
      <option value="Jade Plant">Jade Plant</option>
      </select><br /><br />
      <p>Upload an image: <input type="file" accept="image/jpeg, image/png, image/jpg" name="image" id="uploadedPlantImage" onChange={onChange}  required/></p>

    <input type="submit" value="Save Plant" onClick={onClick}/><br /><br />
    </form>
    </div>
  );
}

export default UserPlantForm;

//  Photo of your plant:
//  <input type="file" name="image" /> <br /><br />
