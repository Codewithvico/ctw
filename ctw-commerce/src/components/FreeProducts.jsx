import React from 'react';
import { freeproduct } from '../data';
import FreeProductItems from './FreeProductItems';
import styled from 'styled-components';
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ display: "none"})}

`;
const Wrapper = styled.div``;
const Title = styled.h3`
    color: white; 
`;

const Text = styled.p`
    color: white; 
`;


const FreeProducts = () => {
  return (
    <Container>

       {freeproduct.map(item=>(
          <FreeProductItems item={item} key={item.id} />
       ))}
    </Container>
 );
};


export default FreeProducts;
