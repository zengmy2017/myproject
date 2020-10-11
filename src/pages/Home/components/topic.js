import React,{Component,Fragment} from "react";
import {Topicwrapper,Topicitem} from '../style';
import {connect} from 'react-redux';



class Topic extends Component {
    render() {
        return (
            <Topicwrapper>

                {this.props.list.map((item, index) => {

                    return (<Topicitem key={item.get("id")}><img className='topicpic' src={

                        item.get("imgUrl")

                    }/>{item.get("title")}</Topicitem>)

                })}


            </Topicwrapper>
        )
    }


}

   const mapStateToProps=(state)=>({


        list:state.get("home").get("topiclist")


    })



   const mapDispatchToProps=(dispatch)=>({



    })



export default connect(mapStateToProps,mapDispatchToProps)(Topic);