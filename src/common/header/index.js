import React,{Component,Fragment} from "react";
import {Logo,Wrapper,Nav,Listitem,
    Search,Inputbox,Searchtitle,
    Buttons,Buttonbox,Searchinfo,
    Searchswithc,Searchitem,Searchlist} from './style';
import {CSSTransition} from "react-transition-group";
import {connect} from "react-redux";
import {searchffoucs,searchfblur,getlist,
    chagnmous,chagnmousleave,chagnmpage} from './store/actioncreators';
import {Link} from 'react-router-dom';
import {logout} from '../../pages/login/store/actioncreators';




class Header extends Component {

    render() {

        const {focused, handlefocus, handleblur,list} = this.props;

        return (
            <Wrapper>
                <Logo href='/'/>
                <Nav>
                    <Listitem className='left active'>首页</Listitem>
                    <Listitem className='left'>下载APP</Listitem>
                    {
                        this.props.login? <Listitem className='right' onClick={this.props.logout}>退出</Listitem>:<Link to='/login'><Listitem className='right'>登录</Listitem></Link>
                    }

                    <Listitem className='right'>
                        <i className='iconfont'>我</i>
                    </Listitem>

                    <Search>

                        <Inputbox className={focused ? "focused " : ""} onFocus={
                            handlefocus(list)
                        } onBlur={handleblur}></Inputbox>

                        <i className={focused ? 'bian iconfont zoom' : "iconfont zoom"}>我</i>


                        {this.handlelist()}

                    </Search>


                </Nav>
                <Buttons>
                    <Buttonbox>注册</Buttonbox>
                    <Link to='/write'>
                    <Buttonbox className='actives'>
                        <i className='iconfont'>我</i>
                        写文章</Buttonbox>
                    </Link>
                </Buttons>
            </Wrapper>
        )
    }
    handlelist()  {
        if(this.props.focused||this.props.mousein){
            return(
                <Searchinfo onMouseEnter={this.props.handlemousein} onMouseLeave={this.props.handlemouseleave}>
                    <Searchtitle>热门搜索
                        <Searchswithc onClick={this.props.handlepage(this.props.page,this.props.totalpage,this.spinicon)}>
                            <i ref={(icon)=>{
                                this.spinicon=icon
                            }} className='iconfont spin'>哦</i>
                            换一下</Searchswithc>
                    </Searchtitle>
                    <Searchlist>

                        {

                            this.handlegelis()


                        }

                    {/*    { this.props.list.map((item,index)=>{*/}
                    {/*  return  <Searchitem key={index}>{item}</Searchitem>*/}
                    {/*})}*/}

                    </Searchlist>
                </Searchinfo>
            )}else{
            return null;
        }
    }

    handlegelis(){

        const pagelist=[];

        const jslist=this.props.list.toJS();

        if(jslist.length){

        for(let i=(this.props.page-1)*3;i<this.props.page*3;i++){

            pagelist.push( <Searchitem key={jslist[i]}>{jslist[i]}</Searchitem>);

        }}
        return pagelist;
    }

}




   const mapStateToProps=(state)=>{

        return {

              focused:state.get("header").get('focused'),
               list:state.get("header").get("list"),
               page:state.get("header").get("page"),
               mousein:state.get("header").get("mousein"),
              totalpage:state.get("header").get("totalpage"),
               login:state.get("login").get("login")
        }
    }

    const  mapDispatchToProps=(dispatch)=>{
        return{

            handlefocus(list){

                if(list.size==0){

                    const action1=searchffoucs();

                    dispatch(action1);

                }




                const action=getlist();
                dispatch(action);




            },

            handleblur(){
                const action=searchfblur();
                  dispatch(action);
            },
            handlemousein(){

                const action=chagnmous();
                dispatch(action);

            },
            handlemouseleave(){
                const action=chagnmousleave();
                dispatch(action);
            },
            logout(){

                const action=logout();

                dispatch(action);

            },

            handlepage(page,totalpage,spin){

                // const originangel=spin.style.transform;
                //
                // if(originangel=="0deg"){
                //
                //     spin.style.transform="rotate(360deg)";
                //
                // }if(originangel=="360deg"){
                //     spin.style.transform="rotate(0deg)";
                // }




                if(page<totalpage){

                    const action=chagnmpage(page+1);
                    dispatch(action);

                }else{
                    const action=chagnmpage(1);
                    dispatch(action);
                }

            }
        }
    }


export default connect(mapStateToProps,mapDispatchToProps)(Header);