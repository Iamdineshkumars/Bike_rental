import styled from "styled-components";
const Wrapper = styled.nav`
.home_cart{
  //border:1px solid orange;
  margin-left:260px;
  margin-top:30px;

}
 .cart_1{
  // border:5px solid green;
    width:500px;
   display:grid;
   grid-template-rows:repeat(3,1fr);
   grid-template-columns:repeat(3,1fr);
   row-gap:10px;
   gap:10px;
    
  
 } 
   .image{
   height:200px;
   width:320px;}
   .cart_2{
    border:1px solid red;
    height:400px;

   }
    .cart_2{
      width:350px;
      box-shadow: 2px 2px;
    }
    .heading_part{
    display:flex;
    justify-content:space-between
    }
    .heading{
    font-family:Tahoma;
    }
    .rate{
    color:orange;
    font-family:Tahoma;}

    .book-btn{
      padding:10px;
      margin-left:100px;
      width:80px; 
       height:29px;
       border:none;
      text-decoration:none;
      background-color:#2f363a;
       color:#fff
}
       .attributes{
        font-family:Verdana ;
       }
      .book-btn:hover{
        background-color:#191970;
        color:white
      }
`

export default Wrapper