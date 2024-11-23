import styled from "styled-components";

const Wrapper = styled.div`
.mainparent{
  margin:100px;
}
.parent{

  display:flex;
  justify-content:center;
}
  .rate{
  color:orange;
  font-family:Tahoma
  }
  .title{
  font-family:Tahoma;
  }
  .attributes{
   font-family:Arial
  }
  .child_1{
    border:2px solid red;
    width:400px;
  }
    .child_2{
     border:2px solid blue;
     padding:20px;
     width:250px
    }
     .label{
       margin-bottom:15px;
       font-size:20px;
     }
      .text-field{
      margin-bottom:15px;
      width:200px;
      height:25px;
      }
      .booknow{
       width:200px;
       padding:5px;
       height:25px;
       border:none;
       background-color:#2f363a;
       color:#fff
      }

       .booknow:hover{
        background-color:#191970;
        color:black;
       }
       
`
export default Wrapper