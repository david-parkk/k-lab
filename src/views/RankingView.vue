<template>
    asdfadsfadsfasdfas

</template>


<script>

//import {check} from '../api/checkapi.js'
import {view_challenge} from '../api/category'
export default {
  data(){
    return{
        challenge:[],
        name:""
    }
  },
  async mounted(){
    //check();
    this.challenge=view_challenge();
    console.log("asdf",this.challenge);
    try{
     
     view_challenge().then((array)=>{
      console.log(array)
     })
  }catch(error){
    console.log(error);
  }
}
};

</script>