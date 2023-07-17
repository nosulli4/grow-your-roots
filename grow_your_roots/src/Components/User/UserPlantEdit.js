import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getAllUserPlants, undoEdit, updatePlant, undoAllEdit } from "../../Services/UserCRUDServices";


// Displaying the form to edit the selected plant
const Profile = () => {

    const [plant, setPlant] = useState([]);
    const [newPlant, setNewPlant] = useState({
        nickname: "",
        fertilizer: "",
        size: "",
        place: "",
        light: "",
        water: "",
        category: ""
    });
    const [add, setAdd] = useState(false);
    
    useEffect(()=> {
        getAllUserPlants().then((response) => {
            setPlant(response.filter((res) => (res.attributes.edit === true)));
        })
    }, []);

    // Upating the plant after form submitted
    useEffect(() => {
        if (newPlant && add) {
            // Setting blank inputs to the current value
            if (newPlant.nickname === "") newPlant.nickname = plant[0].attributes.nickname;
            console.log(newPlant.fertilizer)
            if (newPlant.fertilizer === "") newPlant.fertilizer = plant[0].attributes.fertilizer;
            console.log(newPlant.fertilizer)
            if (newPlant.size === "") newPlant.size = plant[0].attributes.size;
            if (newPlant.place === "") newPlant.place = plant[0].attributes.place;
            if (newPlant.light === "") newPlant.light = plant[0].attributes.light;
            if (newPlant.water === "") newPlant.water = plant[0].attributes.water;
            if (newPlant.category === "") newPlant.category = plant[0].attributes.category;
            // Update the plant to the new plant
            updatePlant(plant[0], newPlant);
            setAdd(false);
        }
      }, [newPlant, add]);

    const onChange = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setNewPlant({
        ...newPlant,
        [name]: newValue
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setAdd(true);
    }
    

    if(plant.length > 0){
    return (
        <section>
          <div>
          {plant.length > 0 && (
        plant.map(
          (plant) => (
            <div className="each" key={plant.get("nickname")}>
            <h1>Edit '{plant.get("nickname")}'</h1>
            <form onSubmit={onSubmit} autoComplete="off">
    <div className="auth-top">
        <div>
          <label>Nickname</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="nickname-input"
            value={newPlant.nickname}
            onChange={onChange}
            name="nickname"
            placeholder={plant.get("nickname")}
          />
        </div>
        <div>
          <label>Fertilizer</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="fertilizer-input"
            value={newPlant.fertilizer}
            onChange={onChange}
            name="fertilizer"
            placeholder={plant.get("fertilizer")}
          />
        </div>
        <div>
          <label>Size</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="size-input"
            value={newPlant.size}
            onChange={onChange}
            name="size"
            placeholder={plant.get("size")}
          />
        </div>
        <div>
          <label>Place</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="place-input"
            value={newPlant.place}
            onChange={onChange}
            name="place"
            placeholder={plant.get("place")}
          />
        </div>
        <div>
          <label>Light</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="light-input"
            value={newPlant.light}
            onChange={onChange}
            name="light"
            placeholder={plant.get("light")}
          />
        </div>
        <div>
          <label>Water</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="water-input"
            value={newPlant.water}
            onChange={onChange}
            name="water"
            placeholder={plant.get("water")}
          />
        </div>
        <div>
          <label>Category</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="category-input"
            value={newPlant.category}
            onChange={onChange}
            name="category"
            placeholder={plant.get("category")}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
    </div>
  </form>
            <Link to="/users">
                <button onClick={()=> {
                    undoEdit(plant.id)
                    }}>Back</button>
            </Link>
            </div>
            )
        ))}
        </div>
        </section>
    );} else {
      return (
        <div>
          <h1>Edit</h1>
          <h3>Reload page to view plant</h3>
          <Link to="/users">
                <button onClick={()=> {
                  undoAllEdit();
                }}>Back</button>
            </Link>
        </div>
      )
    }
}

export default Profile;