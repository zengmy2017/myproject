
import {fromJS} from "immutable";
import {Getlist} from './actiontype';



const defauldata=fromJS({

    title:"",
    content:""


})

export default (state=defauldata,action)=>{


    switch (action.type) {

        case Getlist:
            return state.merge({

                title:action.title,
                content:action.content
            })

    }





    return state;
}