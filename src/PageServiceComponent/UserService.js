import axios from "axios";

const DBURL = "http://localhost:8081/YHSBPortal/users/";

class UserService{
    UserLoginMethod(user) {
        axios.post(DBURL+"login",user);
    }
}



export default new UserService();