import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };
  const userNameChangeChandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const userAgeChangeChandler = (e) => {
    setEnteredUserAge(e.target.value);
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User name</label>
        <input
          value={enteredUserName}
          id="username"
          type="text"
          placeholder="username"
          onChange={userNameChangeChandler}
        />
        <label htmlFor="age">Age</label>
        <input
          value={enteredUserAge}
          id="age"
          type="number"
          placeholder="age"
          onChange={userAgeChangeChandler}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
