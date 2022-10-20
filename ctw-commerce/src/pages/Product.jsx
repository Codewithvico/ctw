import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from "../responsive";


const Container = styled.div`
    color: white;
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Img = styled.img`
     width : 100%;
     height : 90vh;
     object-fit : cover;
     ${mobile({height: "40vh"})}
`;
 const InfoContainer = styled.div`
     flex: 1;
     padding: 0px 50px;
     ${mobile({padding: "10px"})}
`;
  const Title = styled.h1`
     font-weight: 200;
     margin: 20px 0px;
     color: white;
`;
  const Desc = styled.p`
     color: white;
  `;
  const Price = styled.span`
     font-weight: 100;
     font-size: 40px;
     color: white;
`;

   const FilterContainer = styled.div`
      width: 50%;
      margin: 30px 0px;
      display: flex;
      justify-content: space-between;
      ${mobile({width: "100%"})}
   `;

   const Filter = styled.div`
       display: flex;
       flex-direction: column;
       align-items: center;

   `;

   const FilterTitle = styled.span`
       font-size: 20px;
       font-weight: 200;
    `;

   const FilterDesc = styled.select`
       margin-left: 10px;
       padding: 5px;
       outline: none;
   `;


   const FilterDescOption = styled.option`
   
   `;

   const AddContainer = styled.div`
       width: 50%;
       display: flex;
       align-items: center;
       justify-content: space-between;
       ${mobile({width: "100%"})}

   `;

   const Button = styled.button`
      padding: 15px;
      border: 1px solid teal;
      background-color: white;
      cursor: pointer;
      font-weight: 500;
      width: 100%;

      &:hover {
          background-color: teal;
          color: white;
      }
   
   `;


   


const Product = () => {
  return (
      <Container className='bg-color'>
          <Navbar />
          <br />
          <Announcement />
          <Wrapper>
              <ImgContainer>
                 <Img src="https://images.pngnice.com/download/2007/DSLR-Camera-PNG-Transparent-Image.png" alt="no-image" />
              </ImgContainer>
              <InfoContainer>
                  <Title>Bootstrap Theme</Title>
                  <Desc>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium repudiandae vitae, 
                      iure sint delectus atque qui ab suscipit itaque laborum voluptatibus consequatur pariatur 
                      is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                      it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                      typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                      sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                      PageMaker including versions of Lorem Ipsum.
                  </Desc>
                  <br />
                  <Price>$ 100</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Ctw Options</FilterTitle>
                          <FilterDesc>
                              <FilterDescOption>Option1 </FilterDescOption>
                              <FilterDescOption>Option2 </FilterDescOption>
                              <FilterDescOption>Option3 </FilterDescOption>
                              <FilterDescOption>Buy Off Licence </FilterDescOption>
                          </FilterDesc>
                      </Filter>
                      <Filter>
                          <FilterTitle>Product Licence</FilterTitle>
                          <FilterDesc>
                              <FilterDescOption>Free </FilterDescOption>
                              <FilterDescOption>Premium </FilterDescOption>
                              <FilterDescOption>Buy Off Licence </FilterDescOption>

                          </FilterDesc>
                      </Filter>
                     
                  </FilterContainer>
                  <AddContainer>
                      <Button>VIEW DEMO</Button>
                      <Button>ADD TO CART</Button>
                  </AddContainer>
              </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer />
      </Container>
  )
};

export default Product;
