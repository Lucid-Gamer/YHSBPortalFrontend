import axios from "axios";
import React, { useState } from "react";
import { Button , Form } from "react-bootstrap";
import UserServiceObject from "../PageServiceComponent/UserService";
import UserService from "../PageServiceComponent/UserService";

const UserLoginPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name , value } = e.target;
    setUser({...user,[name]:value})
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/YHSBPortal/users/login",user).then((res)=>{
          alert(res.data);
          console.log(res.data);
      }).catch((err)=>{
          console.log(err);
      })
  };

  return (
    <div className="col-8 mt-6 ms-5">
        <center>
        <Form onSubmit={(e)=>loginSubmitHandler(e)}>
          <Form.Group className="row" controlId="formBasicEmail">
            <Form.Label className="col-2">Username</Form.Label>
            <Form.Control type="text" name="username" className="col-3" onChange={(e)=>changeHandler(e)} value={user.username}></Form.Control>
          </Form.Group>
          <Form.Group className="row">
            <Form.Label className="col-2">Password</Form.Label>
            <Form.Control type="password" name="password" className="col-3" value={user.password} onChange={(e)=>changeHandler(e)}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Button className="btn btn-primary" type="submit" value="Submit">Submit</Button>
          </Form.Group>
        </Form>
        </center>
    </div>
  );
};

export default UserLoginPage;
