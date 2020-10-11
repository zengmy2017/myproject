import React,{Component,Fragment} from "react";
import {Recommandwrapper,Recommanditem} from "../style";
import {connect} from 'react-redux';



class Recommand extends Component{
    render(){



        return(

            <Recommandwrapper>

                {
                    this.props.list.map((item,index)=>{
                        return(
                            <Recommanditem imgUrl={
                                item.get("imgUrl")
                            } key={item.get("id")}>
                            </Recommanditem>
                        )
                    })
                }

            </Recommandwrapper>
        )
    }
}
const mapStateToProps=(state)=>({

    list:state.get("home").get("recommandlist")

})

 const mapDispatchToProps=(dispatch)=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Recommand);