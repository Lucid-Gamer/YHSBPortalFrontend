import axios from "axios";

const DBURL = "http://localhost:8081/YHSBPortal/users/";

export default class UserService{
    UserLoginMethod(user) {
        axios.post(DBURL+"login",user).then((res)=>{
            alert(res.data.userUsername+" "+res.data.userPassword);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }
}



 