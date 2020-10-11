import {Searchfoucs, Searchblur, Getlist,
    Chagnlist, Changemousstatus,Changmouseleave,Changepage} from "./actiontype";
import {fromJS} from "immutable";


const defauldata=fromJS({

    focused:false,
    list:[],
    page:1,
    totalpage:1,
    mousein:false

})

export default (state=defauldata,action)=>{

   switch(action.type){
       case Searchfoucs:
           return state.set("focused",true);
       case Searchblur:
           return state.set("focused",false);
       case Chagnlist:
           return state.set("list",action.data).set("totalpage",action.totalpage);
       case Changemousstatus:
           return state.set("mousein",true);
       case Changmouseleave:
           return state.set("mousein",false);
       case   Changepage:

           return state.set("page",action.page)


   }






    return state;
}