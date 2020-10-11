import React,{Component,Fragment} from "react";
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";


class Writer extends Component{

    render(){

        if(this.props.login){

            return <div>xiewenzhang</div>
        }else{

         return   <Redirect  to='/'></Redirect>
        }


    }

}
const mapStateToProps=(state)=>({

    login:state.get("login").get("login")

})

const mapDispatchToProps=(dispatch)=>({

})


export default connect(mapStateToProps,mapDispatchToProps)(Writer);