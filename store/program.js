import axios from "axios";
import { defineStore } from "pinia";
export const  useProgramsStore = defineStore('program',{
    state: () =>{
        return{
            programs:null,
            loading:false
        }
    },
    actions:{
         async getprograms(){
             this.loading=true;
             try{
    const response = await axios.get("https://dmcdharan.com/api/programs");
    if(response.status==200){
        this.programs = response.data.data;
    }
             }catch(e){
      console.log(e)
             }finally{
  this.loading=false;
             }

        }
    }

})