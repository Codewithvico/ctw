import React from 'react';
import { semiproduct } from '../data';
import SemiproductItem from './SemiproductItem';
import styled from 'styled-components';
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column"})}

`;
const Semiproduct = () => {
  return (
    <Container>
       {semiproduct.map(item=>(
          <SemiproductItem item={item} key={item.id} />
       ))}
    </Container>
 );
};

export default Semiproduct;
