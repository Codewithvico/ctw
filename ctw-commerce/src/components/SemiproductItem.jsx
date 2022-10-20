import styled from "styled-components";
import React from 'react';
import { mobile } from "../responsive";

const Container = styled.div`
   flex: 1;
   margin: 10px;
   height: 10vh;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   position: relative;
   justify-content: space-between;
   background-color: rgba(0,0,0,0.2);
   cursor: pointer;
   ${mobile({display: "none"})}
`;
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 15px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   ${mobile({display: "none"})}
`;
const Info = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   &:hover {
    background-color: black;
    opacity: 0.7;   
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: all 1.5s ease;
    ${mobile({display: "none"})}
   
`;
const Title = styled.h3`
    color: white;
    top: 0;
    left: 0;
    ${mobile({display: "none"})}
`;

const SemiproductItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
        </Info>
    </Container>
);
};

export default SemiproductItem;
