import styled from 'styled-components';
import logopic from '../../static/logo.png';


export const Wrapper=styled.div`

width:100%;
height:100px;
border-bottom:1px solid #F0F0F0;
position:relative;

`;

export const Logo=styled.a`
width:100%;
display:block;
height:80px;
position:absolute;
top:0px;
left:0;
background-size:contain;
background:url(${logopic}) no-repeat;

`;

export const Nav=styled.div`
width:800px;

height:100px;
margin:0 auto;
`;

export const Listitem=styled.div`
 font-size:20px;
 line-height:100px;
 
 &.left{
 float:left;
 margin-right:50px;
 }
 &.active{
 color:red;
 }
 &.right{
 float:right;
 margin-left:50px;
 }
`;

export const Search=styled.div`
   float:left;
   position:relative;
   
 
   
   .zoom{
   position:absolute;
    right:2px;
    bottom:7px;
    display:block;
    width:30px;
    height:30px;
    border-radius:50%;
  
    background:pink;
    text-align:center;
    line-height:30px;
    cursor:pointer;
    
    &.bian{
     background:orange;
}
   }
`;
export const Inputbox=styled.input.attrs({
    placeholder:"搜索"
})`
padding-left:10px;
width:200px;
height:40px;
outline:none;
border-radius:20px;
margin-top:25px;
padding-right:30px;

&.focused{
width:350px;
}

`;

export const Buttons=styled.div`

position:absolute;
right:0;
bottom:25px;;
`;

export const Buttonbox=styled.button`
width:100px;
height:40px;
border:1px solid pink;
border-radius:20px;
margin-right:20px;
background:white;
cursor:pointer;

.actives{
background:blue;
}
`;

export const Searchinfo=styled.div`
z-index:1;
position:absolute;
left:0;
top:75px;
width:240px;
padding:0 20px;
background:white;
box-shadow:0 0 8px rgba(0,0,0,.2);
`;

export const Searchtitle=styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;

`;

export const Searchswithc=styled.span`
font-size:14px;
float:right;
cursor:pointer;
.spin{
font-size:14px;
margin-right:6px;
transition:all 1s ease-in;

display:block;
float:left;
tranform-origin:center center;
}

`;
export const Searchitem=styled.a`
font-size:12px;
padding:0 5px;
line-height:20px;
border:1px solid #ddd;
color:#969696;
border-radius:4px;
display:block;
float:left;
margin-right:10px;
margin-bottom:10px;
cursor:pointer;
`;

export const Searchlist=styled.div`
overflow:hidden;
`;

