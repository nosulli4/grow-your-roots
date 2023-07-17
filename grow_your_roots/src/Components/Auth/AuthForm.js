import React from "react";


// Reusable auth form for both log in and registration based on prop based in
const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
    {/* Checking to see if the user if logging in or registering */}
    {/* Only display "First Name" and "Last Name" if user is registering*/}
    {!isLogin ?
    <div className="auth-top">
        <div>
          <label>First Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            placeholder="first name"
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            required
          />
        </div>
        </div> : <></>}
        <div>
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            required
          />
        </div>{" "}
        <div className="form-group">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Submit
          </button>
        </div>
    </div>
  </form>
  );
};

export default AuthForm;
