import axios from 'axios';
import {Getlist} from './actiontype';
import {fromJS} from "immutable";


export const getfinal=(title,content)=>{
    return {

        type:Getlist,
        content:fromJS(content),
        title:fromJS(title)
    }
}


export const getlist=(id)=>{
    return (dispatch)=> {

        axios.get("/api/detail.json?id="+id).then((res)=>{

            const result=res.data.data;

            const action=getfinal(result.title,result.content);

            dispatch(action)

        })

    }
}