import axios from "axios";

const DBURL = "http://localhost:8081/YHSBPortal/users/";

class UserService{
    UserLoginMethod(user) {
        axios.post(DBURL+"login",user)
    }
}

const UserServiceObject {
    UserService
}

export default UserServiceObject;