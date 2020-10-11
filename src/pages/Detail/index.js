import React,{Component,Fragment} from "react";
import {Content, Detailwrapper, Wrapheader} from './style';
import {connect}  from 'react-redux';
import {getlist} from './store/actioncreators';
import {withRouter} from 'react-router-dom';




class Detail extends Component{

    componentDidMount() {

        this.props.getcontent(this.props.match.params.id)
    }

    render(){

        return(

            <Detailwrapper>
         <Wrapheader>{this.props.title}</Wrapheader>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                </Content>
            </Detailwrapper>
        )
    }
}

const mapStateToProps=(state)=>({

    title:state.get("detail").get("title"),
    content:state.get("detail").get("content")

})






const mapDispatchToProps=(dispatch)=>({

    getcontent(id){
        const action=getlist(id);
        dispatch(action);
    }

})



export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));