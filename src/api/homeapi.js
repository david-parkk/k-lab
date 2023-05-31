import axios from 'axios';
import instance from "./axiosapi"

async function view_home(){
    try {
        const res = await axios.get('home/',{baseURL: instance.defaults.baseURL});
        return res.data;
    } catch (error){
        console.log(error);
        throw error
    }


}
async function view_home_detail(){
    try {
        const res = await axios.get('home/smallcategory/',{baseURL: instance.defaults.baseURL});
        return res.data;
    } catch (error){
        console.log(error);
        throw error
    }


}

export {view_home,view_home_detail}