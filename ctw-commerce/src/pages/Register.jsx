import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
      background-color: #000000;
      background-image: linear-gradient(147deg, #000000 0%, #434343 74%);      
`;

 const Wrap = styled.div`
     width: 100vw;
     height: 100vh;
     background-color: #000000;
     background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
     display: flex;
     align-items: center;
     justify-content: center;
 `;    

const Wrapper = styled.div`
      width: 40%;
      padding: 20px;
      background-color: #ffffff;
      ${mobile({width: "75%"})}

`;

const Title = styled.h1`
     font-size: 24px;
     font-weight: 300;

`;


const Form = styled.form`
      display: flex;
      flex-wrap: wrap;

`;


const Input = styled.input`
      flex: 1;
      min-width: 40%;
      margin: 20px 10px 0px 0px;
      padding: 10px;

`;


const Agreement = styled.span`
      font-size: 12px;
      margin: 20px;

`;

const Button = styled.button`
       width: 40%;
       border: none;
       padding: 15px 20px;
       background-color: teal;
       color: #ffffff;
       cursor: pointer;
`;

 const Register = () => {
    return (
        <Container>
            <Navbar />
            <br />
           <Wrap>
           <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="email address" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
           </Wrap>
           <Footer />
        </Container>
      );
   };

   export default Register;
