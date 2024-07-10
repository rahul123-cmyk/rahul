import axios from "axios";
import { defineStore } from "pinia";
export const  useMenuStore = defineStore('menu',{
    state: () =>{
        return{
            menus:null,
            loading:false
        }
    },
    actions:{
         async getmenus(){
             this.loading=true;
             try{
    const response = await axios.get("https://dmcdharan.com/api/menus");
    if(response.status==200){
        this.menus=response.data.data;
    }
             }catch(e){
      console.log(e)
             }finally{
  this.loading=false;
             }

        }
    }

})