import React,{Component,Fragment} from "react";
import {Listitem,Listinfo,Loadmore} from '../style';
import {connect} from 'react-redux';
import {Getmorelist} from "../store/actioncreator";
import {Link } from 'react-router-dom';

class Listnew extends Component{


    render(){


        return(
            <Fragment>

            {
                this.props.list.map((item,index)=>{

                    return(


                        <Link to={'/detail/'+item.get("id")} key={index} >

                        <Listitem >
                            <img className='pic' src={item.get("imgUrl")} />
                            <Listinfo>
                                <h3 className='title'>{item.get("title")}</h3>
                                <p className='des'>{item.get("desc")}</p>
                            </Listinfo>
                        </Listitem>

                        </Link>
                    )

                })
            }

            <Loadmore onClick={()=>{
                this.props. handleclick(this.props.page)
            }}>更多文字</Loadmore>

            </Fragment>

        )
    }
}

const mapStateToProps=(state)=>({

list:state.get("home").get("articlelist"),
    page:state.get("home").get("articlepage")

})


 const mapDispatchToProps=(dispatch)=>({

     handleclick(page){

           const action=Getmorelist(page);

           dispatch(action);

     }

})

export default connect(mapStateToProps,mapDispatchToProps)(Listnew);