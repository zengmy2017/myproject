
import axios from "axios";

import {Homedata,Homemore} from './actiontype';

import {fromJS} from "immutable";


const homedata=(result)=>{

 return    {
        type: "homedata",
        topiclist: result.topicList,
        articlelist: result.articleList,
        recommandlist: result.recommandList
    }

}


export const chagnehomdedata=()=>

    {

        return (dispatch)=>{

            axios.get("/api/home.json").then((res) => {

                const result = res.data.data;

                const action=homedata(result)

                dispatch(action);

            })

        }

    }

    const getmore=(result,nextpage)=>{
    return{
        type:Homemore,
        result:fromJS(result),
        nextpage
    }
    }


    export const Getmorelist=(page)=>{

      return(dispatch)=>{

           axios.get("/api/homelist.json?page="+page).then((res)=>{

               const result=res.data.data;

               const action=getmore(result,page+1);

               dispatch(action);

           })

      }

    }
export const showtop=()=>{

 return   { type:"show"}

}

export const hidetop=()=>{

    return {
        type:"hide"
    }

}