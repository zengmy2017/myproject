import {Searchfoucs, Searchblur,Getlist,Chagnlist,
   Changemousstatus,Changmouseleave,Changepage} from './actiontype';
import axios from 'axios';
import {fromJS} from "immutable";

export const searchffoucs=()=>({

   type:Searchfoucs

})

export const searchfblur=()=>({

   type:Searchblur

})

const chagli=(data)=>{

   return{
      type:Chagnlist,
      data:fromJS(data.data),
      totalpage:Math.ceil(data.length/3)
   }
}

export const getlist=()=>{

   return (dispatch)=>{

      axios.get("/api/headerList.json").then((res)=>{

         const data=res.data;

         const action=chagli(data);

         dispatch(action);

      }).catch((e)=>{

         console.log(e);
      })


   }
}

export const chagnmous=()=>({

   type:Changemousstatus

})

export const chagnmousleave=()=>({
   type:Changmouseleave
})

export const chagnmpage=(page)=>({
   type:Changepage,
   page
})