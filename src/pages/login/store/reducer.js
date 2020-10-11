
import {fromJS} from "immutable";




const defauldata=fromJS({

login:false

})

export default (state=defauldata,action)=>{


    switch (action.type) {

        case "yanzhng":
            return state.set("login",action.value)

        case "logout":
            return state.set("login",action.value)



    }





    return state;
}