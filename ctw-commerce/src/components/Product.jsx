import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 450px;
  height: 700;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f5fbfd;
  position: relative;
  cursor: pointer;
`;
 
/*  const Circle = styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   background-color: #FFFFFF;
   position: absolute;
`; 
*/

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
       background-color: black;
       opacity: 0.6;
       transition: all 1.5s ease;
    }

`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    
`;

const Icon = styled.div`
   opacity: 0.4;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 10px;
   transition: all 0.5s ease;
   &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    opacity: 0.9;
}
`;



const Product = ({item}) => {
  return (
  <Container>
      <Image src={item.img}/>
      <Info>
          <Icon>
              <ShoppingCartOutlinedIcon/> 
          </Icon>
          <Icon>
              <VisibilityIcon/> 
          </Icon>
          <Icon>
              <FavoriteBorderOutlinedIcon/> 
          </Icon>
      </Info>
  </Container>
  )
};

export default Product;
