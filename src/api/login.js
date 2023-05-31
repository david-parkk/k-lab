import axios from 'axios';
import store from './store.js';
import instance from "./axiosapi"

async function login_user(userData) {
  console.log("요청보냄");
  try {
    const res = await axios.post('/login/', userData, { baseURL: instance.defaults.baseURL });
    const data = res.data;
    console.log("로그인 성공");
    console.log(data);
    if (data.access_token) {
      store.commit('signin', data.access_token);
      //store.commit('set_id', data.nickname);
      //console.log("age",data.age)
      //store.commit('set_age', data.age);
    } else {
      console.log('failed');
    }
  } catch (error) {
    console.log(error);
  }
}
function register_user(userData) {
  axios.post('/sign/', userData, { baseURL: instance.defaults.baseURL})
  .then((res)=>{
    const data = res.data;
    if (data) {
      console.log('success');
      console.log(data);
      
    } 
    else {
    // 로그인 실패 처리
      console.log('failed');
    }
  })
  .catch((error)=>{
    console.log(error);
  })
  console.log("비동기 실행중");
}
async function check_user(token){
  try{
      const res = await axios.get('/check/', 
      { baseURL: instance.defaults.baseURL,
          headers:{
              tokenkey: token
          }
      });

      store.commit('set_id', res.nickname);
      store.commit('set_age', res.age);
      return res.data;
  } catch (error) {
      console.log(error);
  }


}
async function logout(){
  try {
    store.commit('logout')
  }
  catch (error) {
    console.log(error);
  }
}
export {login_user,register_user,check_user,logout};