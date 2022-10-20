import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import Semiproduct from "../components/Semiproduct";
import FreeProducts from "../components/FreeProducts";

const Container = styled.div``;
const Title = styled.h1`
    margin : 20px;
    color: white;
`;

const FilterContainer = styled.div`
    display : flex;
    justify-content : space-between;
`;
const Filter = styled.div`
     margin: 20px;
     ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column"})}
`;

const FilterText = styled.span`
     font-size:  20px;
     font-weight: 600;
     margin-right: 20px;
     color: teal;
`;

const Select = styled.select`
     padding: 10px;
     margin-right: 20px;
     ${mobile({ margin : "10px 0px"})}
`;
const Option = styled.option``;

const Text = styled.p`
  margin-left: 25px;
  max-width: 70%;
  color: white;
  display: flex;
`;

const ProductList = () => {
  return (
    <Container className="bg-color">
       <Navbar/>
       <br />
       <Announcement/>
       <Title> Digital Forest </Title>
       <Text>
       Need a website for your business? This collection is for you! We have hundreds of royalty-free photos of popular products. This includes free image of items that are commonly dropshipped from Aliexpress, as well as DIY items.
<br /> <br />
Are you looking to launch your online business? Try Shopify for free!
       </Text>
       <Semiproduct/>
       <FreeProducts />
       <FilterContainer>
           <Filter>
               <FilterText>Filter Products:</FilterText>
               <Select>
                   <Option disabled selected> Categories </Option>
                   <Option> Option 1 </Option>
                   <Option> Option 2 </Option>
                   <Option> Option 3 </Option>
                   <Option> Option 1 </Option>
                   <Option> Option 2 </Option>
                   <Option> Option 3 </Option>
               </Select>
           </Filter>
           <Filter>
               <FilterText>Sort Products:</FilterText>
               <Select>
                   <Option disabled selected> Newest </Option>
                   <Option> FREE PRODUCTS </Option>
                   <Option> NEW PRODUCTS </Option>
                   <Option> ALL PRODUCTS </Option>
               </Select>
           </Filter>
       </FilterContainer>
       <Products/>
       <Newsletter/>
       <FreeProducts />
       <Footer/>
    </Container>
  );
};

export default ProductList;
