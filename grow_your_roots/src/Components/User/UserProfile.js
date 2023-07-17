import React, {useEffect, useState} from "react";
import { getUser } from "../Auth/AuthService";
import { Link } from "react-router-dom";

const Profile = () => {

    const [user, setUser] = useState([])

    // Get user data
    useEffect(()=> {
        setUser(getUser());
    }, []);

    // Displaying currently logged user data
    return (
        <section>
          <h1>My Profile</h1>
          <div className="ProfileElem">
              <h3>Username: {user.username}</h3>
        </div>
        <div className="ProfileElem"> 
              <h3>Email: {user.email}</h3>
        </div>
        <div className="ProfileElem"> 
              <h3>First Name: {user.firstName}</h3>
        </div>
        <div className="ProfileElem">
              <h3>Last Name: {user.lastName}</h3>
        </div>
        <div>
        <Link to="/users/profile/edit">
            <button>Edit</button>
          </Link>
        <Link to="/users">
            <button>Back</button>
          </Link>
        </div>
        </section>
    );
}

export default Profile;