import React from "react";
import "./Users.css";
const UserForm = props => {
  return (
    <form className="form" onSubmit={props.getUser}>
      <input
        className="input"
        minLength="7"
        maxLength="20"
        placeholder="Username"
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="username"
      />
      <button className="button">Submit</button>
    </form>
  );
};
export default UserForm;
