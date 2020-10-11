import React,{PureComponent,Fragment} from "react";
import {connect}  from 'react-redux';
import {Logwrapper,Loginbox,Input,Button} from "./style";
import {submintaccount} from './store/actioncreators';
import {Redirect} from 'react-router-dom';





class Login extends PureComponent{

    componentDidMount() {


    }

    render(){

      if(!this.props.login){return(
          <Logwrapper>
              <Loginbox>
                  <Input placeholder='账号'innerRef={(input)=>{
                      this.account=input
                  }} >

                  </Input>
                  <Input placeholder='密码' type='password' innerRef={(input)=>{
                      this.pwd=input
                  }}>

                  </Input>
                  <Button onClick={()=>this.props.loginbutton(this.account,this.pwd)}>登录</Button>
              </Loginbox>
          </Logwrapper>
      )}else{
              return <Redirect to='/'></Redirect>
      }


    }
}

const mapStateToProps=(state)=>({


    login:state.get("login").get("login")

})






const mapDispatchToProps=(dispatch)=>({

    loginbutton(account,pwd){

             const action=submintaccount(account,pwd);

             dispatch(action);


    }

})



export default connect(mapStateToProps,mapDispatchToProps)(Login);