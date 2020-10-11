
import {fromJS} from "immutable";
import {Homemore} from "./actiontype";


const defauldata=fromJS({

    topiclist:[],
    articlelist:[],
    recommandlist:[],
    articlepage:1,
    showscroll:false

})

export default (state=defauldata,action)=>{

    switch(action.type){

        case "homedata":

            return state.merge({
                "topiclist":fromJS(action.topiclist),
                "articlelist":fromJS(action.articlelist)
                // "recommandlist":fromJS(action.recommandlist)
            });


        case Homemore:

          return state.merge({"articlelist":state.get("articlelist").concat(action.result),
              "articlepage": action.nextpage
          })


        case "show":

            return state.set("showscroll",true);


        case "hide":

            return state.set("showscroll",false);




    }




    return state;
}