import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import { mobile } from "../responsive";



const Container = styled.div`
   display: flex;
   color: whitesmoke;
   ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 20px;
`;

const Logo = styled.h1`
   color: whitesmoke;
`;
const Desc = styled.p`
   margin: 20px 0px;
   color: whitesmoke;
`;
const SocialContainer = styled.div`
   display : flex;
`;
const SocialIcon = styled.div`
    width : 40px;
    height : 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;   
    margin-right: 20px;
`;


const Center = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({display: "none"})}
   
`;

const Title = styled.h3`
    margin-bottom: 30px;
    color: whitesmoke;
`;

const List = styled.ul`
     margin: 0;
     padding: 0;
     list-style-type: none;
     display: flex;
     flex-wrap: wrap;
     color: whitesmoke;
`;

const ListItem = styled.li`
     width: 50%;
     margin-bottom: 10px
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
     margin-bottom: 20px;
     display: flex;
     align-items: center;
     color: whitesmoke;
`;

const Payment = styled.img`
     width: 50%;
`;

const Footer = () => {
  return ( 
  <Container>
      <Left>
          <Logo>CodethyWeb.</Logo>
          <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate nostrum reprehenderit accusantium nesciunt libero rerum, at optio earum minima aliquam recusandae quod voluptate eveniet ex distinctio officiis inventore cum.
          </Desc>
          <SocialContainer> 
             <SocialIcon color="385999">
                <FacebookIcon/>
             </SocialIcon>
             <SocialIcon color="E4405F">
                <InstagramIcon/>
             </SocialIcon>
             <SocialIcon color="55ACEE">
                <TwitterIcon/>
             </SocialIcon>
             <SocialIcon color="E60023">
                <YouTubeIcon/> 
             </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Themes</ListItem>
              <ListItem>Templates</ListItem>
              <ListItem>Scripts</ListItem>
              <ListItem>Content MS</ListItem>
              <ListItem>e-Commerce</ListItem>
              <ListItem>Trends</ListItem>
          </List>
      </Center>
      <Right>
       <Title>Contact</Title>
       <ContactItem>
           <AddLocationAltIcon style={{marginRight: "10px", color: "whitesmoke"}} /> 622 Medalion Ave Silver Spring Maryland 98336
       </ContactItem>
       <ContactItem>
           <LocalPhoneIcon style={{marginRight: "10px", color: "whitesmoke"}} /> +1 234 567 8901
       </ContactItem>
       <ContactItem>
           <MailIcon style={{marginRight: "10px", color: "whitesmoke"}} /> contact@codethyweb.com
       </ContactItem>
       <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
  </Container>
  
  );
};

export default Footer;
