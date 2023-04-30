import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState()

  const onSubmitHandler = (event) => {
    setError(false)
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title:"Invalid input",
        message:"Please enter a valid name"
      })
      return;
    }
    if (+age < 1) {
      setError({
        title:"Invalid input",
        message:"Please enter a valid age"
      })
      return;
    }
    console.log(username, age);
    setUsername("");
    setAge("");
    props.onAddUser({ username, age });
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const onCloseHandler = (status) => {
    setError(null)
  }

  return (
    <>
      {error && <ErrorModal onClose={onCloseHandler} title={error.title} message={error.message}/>}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
