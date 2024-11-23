import styled from "styled-components";

const Wrapper = styled.div`
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
  th{
   padding:10px;
   font-family:Trebuchet MS ;
   background-color: #D6EEEE;
  }
   td {
  padding: 25px;
  font-family:Verdana
}
  table {
  border-spacing: 30px;
}
  .bookings_2{
     margin-left:250px;
     margin-top:100px;
  }
     .completed{
      width:40px;
       padding:6px;
       height:29px;
       border:none;
       background-color:#2f363a;
       color:#fff
     }
       .btn-style{
        text-decoration:none;
        color:white
       }
       .completed:hover{
        background-color:#191970;
        color:black;
       }
         .total{
          margin-left:850px;
          font-family:Trebuchet MS ;

        }
`
export default Wrapper