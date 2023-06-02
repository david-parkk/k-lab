import axios from "axios"
import instance from "./axiosapi"

async function push_rate(key,rate) {
    try {
      const res = await axios.put('home/smallcategory/content/'+key+'/',rate, { baseURL: instance.defaults.baseURL });
      console.log('api : home/smallcategory/content/'+key+'/')
      console.log("res.data", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
}

export {push_rate};