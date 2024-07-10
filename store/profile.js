import axios from "axios";
import { defineStore } from "pinia";
export const  useProfileStore = defineStore('counter',{
    state: () =>{
        return{
            school:null,
            loading:false
        }
    },
    actions:{
         async getSchoolProfile(){
             this.loading=true;
             try{
    const response = await axios.get("https://dmcdharan.com/api/school-profile");
    if(response.status==200){
        this.school=response.data.data;
    }
             }catch(e){
      console.log(e)
             }finally{
  this.loading=false;
             }

        }
    }

})