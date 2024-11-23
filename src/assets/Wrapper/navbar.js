import styled from"styled-components"

const Wrapper = styled.nav`
.nav_main{
padding:10px;
background-color:black;
display:flex;
justify-content:space-between;

}
.image{
height:80px;
width:80px;
border-radius:10px;}

.navbar0{
  display:flex;
  align-items:center;
}
  .title{
   color:orange;
   font-family:Arial
  }
.navbar1{
 color:white;
 text-decoration:none;
 border:1px solid red;
 padding:10px;
 font-size:larger;
 font-family:Verdana
}
 .navbar1:hover{
  background-color:orange;
  color:black;
 }

`
export default Wrapper