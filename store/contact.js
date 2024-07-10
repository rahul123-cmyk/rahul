import axios from "axios";
import { defineStore } from "pinia";
export const  useContactStore = defineStore('contact',{
    state: () =>{
        return{
            contacts:null,
            loading:false
        }
    },
    actions:{
         async save(data){
             this.loading=true;
             try{
    const response = await axios.get("https://dmcdharan.com/api/contact");
    if(response.status==200){
        this.galleries=response.data.data;
    }
             }catch(e){
      console.log(e)
             }finally{
  this.loading=false;
             }

        }
    }

})