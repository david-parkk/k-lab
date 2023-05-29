import axios from 'axios';
import instance from "./axiosapi"

async function check(){
    try {
        console.log("신호보냄");
        const res = await axios.get('check/',{ baseURL: instance.defaults.baseURL ,
           headers: {
                
            }
        });
        console.log("성공 ",res.data);
        return res.data;
    } catch (error){
        console.log(error);
        throw error
    }


}

export {check}