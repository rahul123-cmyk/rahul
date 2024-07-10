import axios from "axios";
import { defineStore } from "pinia";
export const  useMessagesStore = defineStore('messages',{
    state: () =>{
        return{
            messages:null,
            loading:false
        }
    },
    actions:{
         async getmessages(){
             this.loading=true;
             try{
    const response = await axios.get("https://dmcdharan.com/api/messages");
    if(response.status==200){
        this.messages=response.data.data;
    }
             }catch(e){
      console.log(e)
             }finally{
  this.loading=false;
             }

        }
    }

})