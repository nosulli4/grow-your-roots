import React, { useEffect, useState } from "react";
import PlantDetails from "./PlantDetails";
import { Link } from "react-router-dom";
import "../Styling/PlantMain.css";
import Header from "../Header/Header";
import Parse from "parse";
import HomeUserFooter from "./HomeUserFooter";
import { checkUser } from "../Auth/AuthService";

// Home component
// Includes header of the homepage, navigation link to the user page, and the PlantDetails component
const Home = () => {

  // If the user is authenticated already, maintain this authentication and allow
  // user to access their user page
  const goToUser = () => {
    Parse.User.current().authenticated = true;
  }

  // Different buttons depending on if the user is authenticated or not
  if(Parse.User.current() && Parse.User.current().authenticated) {
    return   (<section>
      <h1>Grow Your Roots</h1>
      <div>
          <Link to="/users">
            <button onClick={goToUser}>View Your Plants</button>
          </Link>
        </div>
      <PlantDetails />
      <HomeUserFooter />
    </section>)
  } else {
  // If the user is not authenticated, return the basic home page
  return (
    <section>
      <h1>Grow Your Roots</h1>
      <div>
          <Link to="/auth">
            <button>View Your Plants</button>
          </Link>
        </div>
      <PlantDetails />
      <Header />
    </section>
    )};
  }

export default Home;
