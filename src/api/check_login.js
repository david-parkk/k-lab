import axios from 'axios';
import instance from "./axiosapi"
async function check_login(token){
    try{
        console.log("tokne: ",token);
        const res = await axios.get('/check/', token, 
        { baseURL: instance.defaults.baseURL,
            headers:{
                tokenkey: token
            }
        });
        const data = res.data;
        console.log(data);
    } catch (error) {
        console.log(error);
    }


}

export {check_login};