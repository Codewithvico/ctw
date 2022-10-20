import styled from "styled-components";
import React from 'react';
import { mobile } from "../responsive";


const Container = styled.div`
   flex: 3;
   margin: 3px;
   height: 70vh;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   min-width: 450px;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   position: relative;
   cursor: pointer;

`;
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 1px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;


const CategoryItems = ({item}) => {
  return (
      <Container>
          <Image src={item.img} />
          <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
          </Info>
      </Container>
  )
};

export default CategoryItems;
