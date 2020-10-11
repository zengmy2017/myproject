import React,{PureComponent,Fragment} from "react";
import{Homewrapper,Rightwrapper,Leftwrapper,Backtop}  from './style';
import Listnew from './components/list';
import Writer from './components/writer';
import Topic from './components/topic';
import Recommand from './components/recommand';
import axios from 'axios';
import { connect }from 'react-redux';
import {chagnehomdedata,Getmorelist,showtop,hidetop} from './store/actioncreator';



class Home extends PureComponent{




    componentDidMount() {

       this.props.senhan();
       this.bindevents();
    }


    bindevents(){

        window.addEventListener("scroll",this.props.changescroll)

    }

componentWillUnmount() {

    window.removeEventListener("scroll",this.props.changescroll)

}


    render(){
        return(
            <Homewrapper>
                <Leftwrapper>
<img className='banner' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c
009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
             <Topic/>
             <Listnew/>
                </Leftwrapper>

                <Rightwrapper>

                    <Recommand/>
                 <Writer/>
                </Rightwrapper>

                {
                    this.props.scrolltop?  <Backtop onClick={this.handlsrcp}>
                        回到顶部
                    </Backtop>:null
                }

            </Homewrapper>
        )
    }

    handlsrcp(){

       document.documentElement.scrollTop=0;
    }
}

const mapStateToProps=(state)=>({

    scrolltop:state.get("home").get("showscroll")

})

 const mapDispatchToProps=(dispatch)=>({

     senhan() {


const action=chagnehomdedata();

dispatch(action);


     },

     changescroll(){

      const distance=document.documentElement.scrollTop;

      if(distance>400){

          const action=showtop();

          dispatch(action);

      }else{

          const action=hidetop();

          dispatch(action);

      }


     }
 })



export default connect(mapStateToProps,mapDispatchToProps)(Home);