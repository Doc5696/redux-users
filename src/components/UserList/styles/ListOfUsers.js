import styled from 'styled-components';

const ListOfUsers = styled.ul`
 list-style: none;
 font-size: 14pt;
 font-family: Arial, Helvetica, sans-serif;
 li{
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 5px 1vmin;
   min-height: 30px;
   &:nth-child(odd){
    background-color: rgba(0, 141, 210, 0.05);
  }
 }
`

export default ListOfUsers;