import React, { useEffect, useState } from "react";
import { checkUser, createUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate, Link } from "react-router-dom";

const AuthRegister = () => {
  const navigate = useNavigate();

  // empty newUser variable to be passed down to the form
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [add, setAdd] = useState(false);

  // redirect already authenticated users back to user page
  useEffect(() => {
    if (checkUser()) {
      navigate("/users");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you have successfully registered!`
          );
          navigate("/");
        }
        setAdd(false);
      });
    }
  }, [navigate, newUser, add]);


    // Event handlers for when user is filling out registration form
  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value: newValue } = e.target;

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  // Returning registration form with nav to login page
  return (
    <div>
      <AuthForm
        user={newUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
      <div>
          <Link to="/auth/login">
            <button>Login</button>
          </Link>
        </div>
    </div>

  );
};

export default AuthRegister;
