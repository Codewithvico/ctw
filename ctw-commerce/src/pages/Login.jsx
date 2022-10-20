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
      background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
      background-size: cover;
      display: flex;
      align-items: center;
     justify-content: center;
 `;    

const Wrapper = styled.div`
     width: 25%;
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
      flex-direction: column;

`;


const Input = styled.input`
      flex: 1;
      min-width: 40%;
      margin: 10px  0px;
      padding: 10px;

`;

const Button = styled.button`
       width: 40%;
       border: none;
       padding: 15px 20px;
       background-color: teal;
       color: #ffffff;
       cursor: pointer;
       margin-bottom: 10px;
`;

const Link = styled.a`
      margin: 5px 0px;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Navbar />
      <br />
      <Wrap> 
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link>FORGOT PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
        </Wrap>
        <Footer />
    </Container>
  );
};

export default Login;
