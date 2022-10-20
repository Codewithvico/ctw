import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";

const Container = styled.div `
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Wrapper = styled.div`
   width: 30%;
   ${mobile({display: "none"})}
`;

const Title = styled.h1`
   color: white;

`;
const Text = styled.p`
    color: white;
    width: 50%;
    line-height: 1.5em;
`;

const Button = styled.button`
    width: 50%;
    height: 5vh;
    cursor: pointer;
    outline: none;
    &:hover {
      background-color: gold;
      border: none;
    }
`;

const Products = () => {
  return (
  <Container>
    <Wrapper>
    <Title>POPULAR PRODUCTS</Title>
    <br />
      <Text>Most everything you need to get started — templates, scripts, application  suppliers, and more. 
      </Text>
      <br />
      <Button>SHOP NOW</Button>
      </Wrapper>
      {popularProducts.map(item => (
          <Product item={item} key={item.id} />
    ))}
  </Container>
  )
}

export default Products;
