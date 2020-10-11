import styled from "styled-components";



export const Homewrapper=styled.div`
width:960px;
margin:0 auto;
overflow:hidden;
`;


export const Rightwrapper=styled.div`
width:280px;
float:right;
`;

export const Leftwrapper=styled.div`
margin-left:15px;
margin-top:30px;
width:625px;
float:left;
.banner{
width:625px;
height:240px;
}
`;

export const Topicwrapper=styled.div`

padding:20px 0 10px 0;

overflow:hidden;
margin-left:-10px;
margin-bottom:10px;
border-bottom:1px solid black;

`;

export const Topicitem=styled.div`

float:left;
background:#f7f7f7;
height:32px;
line-height:32px;
font-size:14px;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
padding-right:10px;
padding-left:10px;
margin-left:18px;
margin-bottom:10px;

.topicpic{

display:block;
float:left;
margin-right:5px;
width:32px;
height:32px;
}

`;

export const Listitem=styled.div`
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  overflow:hidden;
  .pic{
  width:125px;
  float:right;
  height:100px;
  }
`;
export const Listinfo=styled.div`

width:500px;
float:left;
border-radius:20px;
.title{
font-size:18px;
line-height:27px;
font-weight:bold;
color:#333;

}
.pic{
font-size:13px;
line-height:18px;
color:#999;
}

`;

export const Recommandwrapper=styled.div`
margin:30px 0;
width:280px;
`;

export const Recommanditem=styled.div`

width:280px;
height:50px;
background:url(${(props)=>
    props.imgUrl
});
background-size:contain;

`;

export const Writerwrpper=styled.div`
margin-top:200px;
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
line-height:300px;
height:300px;
text-align:center;
`;

 export const Loadmore=styled.div`
width:100%;
color:#ffff;
height:40px;
line-height:40px;
background:#a5a5a5;
text-align:center;
border-radius:20px;
margin-top:30px 0;
cursor:pointer;
`;

export const Backtop=styled.div`
position:fixed;
right:100px;
bottom:30px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #ccc;
font-size:12px;

`;