import React, { useState } from "react";
import { Button } from "react-bootstrap";
import UserService from "../PageServiceComponent/UserService";

const userService = new UserService();

const UserLoginPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    //axios.post("http://localhost:8081/YHSBPortal/users/login",user).then((res) => {
      userService.UserLoginMethod(user);
    return user;
  };

  return (
    <form onSubmit={(e) => loginSubmitHandler(e)} className="container col-6 mt-3">
      <div className="mt-4">
        <h1 className="text text-center text-primary">User Login</h1>
        <hr />
      </div>
      <div className="mb-3 mt-3">
        <input type="text"
          className="form-control" name="username" value={user.username}
          placeholder="Username" onChange={(e) => changeHandler(e)}
        />
        <small id="helpId" className="form-text text-danger">*Not your emailID but the username</small>
      </div>
      <div className="mb-1">
        <input type="password"
          className="form-control" name="password" value={user.password} 
          placeholder="Password" onChange={(e) => changeHandler(e)}
        />
      </div>
      <div className="mt-3 text-center">
        <Button className="btn btn-success tezt-light" type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default UserLoginPage;
