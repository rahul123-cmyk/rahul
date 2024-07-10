import axios from "axios";
import { defineStore } from "pinia";
export const  useMembersStore = defineStore('member',{
    state: () =>{
        return{
            members:null,
            loading:false
        }
    },
    actions:{
         async getmembers(){
             this.loading=true;
             try{
    const response = await axios.get("https://dmcdharan.com/api/members");
    if(response.status==200){
        this.members=response.data.data;
    }
             }catch(e){
      console.log(e)
             }finally{
  this.loading=false;
             }

        }
    }

})