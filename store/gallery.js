import axios from "axios";
import { defineStore } from "pinia";
export const  useGalleriesStore = defineStore('gallery',{
    state: () =>{
        return{
            galleries:null,
            loading:false
        }
    },
    actions:{
         async getgalleries(){
             this.loading=true;
             try{
    const response = await axios.get("https://dmcdharan.com/api/galleries");
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