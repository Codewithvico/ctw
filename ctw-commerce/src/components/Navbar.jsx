import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import styled from 'styled-components';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { mobile } from "../responsive"

const Container = styled.div `
     height: 85px;
     ${mobile({height: "50px"})}
`;
const Wrapper = styled.div `
     padding: 10px 20px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     ${mobile({padding: "10px 0px"})}
`;
const Left = styled.div `
     flex: 1;
     display: flex;
     align-items: center;
     margin-left: 55px;
  `;

  const SubMenu = styled.div`
    ${mobile({display: "none"})}
  
  `;
 
  const Language = styled.div `
    cursor: pointer;
    color: whitesmoke;
    margin-left: 20px;
    margin-top: 5px;
    border: 2px solid whitesmoke;
    border-radius: 5px;
    ${mobile({display: "none"})}
  `;
  
  const SearchBarContainer = styled.div`
      border: 0.5px solid lightgrey;
      display: flex;
      align-content: center;
      margin-left: 25px;
      padding: 5px;
      height: 4vh;
      width: 100%;
      border-radius: 5px;
      outline: none;
  
  `;

  const Input = styled.input `
    border: none;
    width: 100%;
    line-height: 1.1rem;
    letter-spacing: 0.5rem;
    outline: none;
  
  `;

const Center = styled.div `
   flex: 1;
   text-align: center;
`;

 const Logo =  styled.h1 `
   cursor: pointer;
   position: relative;
   top: 5px;
   ${mobile({marginLeft: "-185px", height: "34px", marginTop: "-26px", objectFit: "cover"})}
`;

 const Img = styled.img`
    width: 80px;
    object-fit: cover;
    ${mobile({width: "50px", border: "3px solid goldenrod", borderRadius: "50%"})}
`;

 const MenuItem = styled.div `
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: whitesmoke;
   ${mobile({fontSize: "12px", marginLeft: "10px", display: "none" })}
`;

 const Right = styled.div `
   flex: 1;
   display: flex;
   align-items: center;
   margin-right: 55px;
   justify-content: flex-end;
${mobile({flex: 2, justifyContent: "center"})}
`;

  const AsideMenu = styled.div`
     color: #FFFFFF;
     margin-right: 50px;
     cursor: pointer;
     ${mobile({display: "flex", justifyContent: "flex-end", flex: "1", color: "white", marginRight: "50px" })}
`;

const Navbar = () => {
  return (<Container>
      <Wrapper>
          <Left>
            <SubMenu> 
            <MenuOutlinedIcon style={{color:"white", fontSize:46, cursor: "pointer"}} />
            </SubMenu>
              <Language>
              <svg width="36" fill="#fff" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Language</title><path d="M478.33 433.6l-90-218a22 22 0 00-40.67 0l-90 218a22 22 0 1040.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 00458 464a22 22 0 0020.32-30.4zM334.83 362L368 281.65 401.17 362zM267.84 342.92a22 22 0 00-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 000-44H214V70a22 22 0 00-44 0v20H54a22 22 0 000 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 00-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1021.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0030.75-4.9z"/></svg>
              </Language>
          </Left>
          <Center>
              <Logo>
              <Img src="https://codethyweb.com/web/images/favicon.png" alt="no-image" />
              </Logo>
          </Center>
          <Right>
          <SearchBarContainer>
                 <Input placeholder="Search Email Templates..." />
                 <Search style={{color:"grey", fontSize:36, cursor: "pointer"}} />
              </SearchBarContainer>
          <MenuItem>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlinedIcon />
                </Badge>
              </MenuItem>
              <MenuItem>
                  <AccountCircleOutlinedIcon  style={{fontSize: 43}} />
              </MenuItem>
          </Right>
          <AsideMenu>
             <WidgetsIcon style={{fontSize:43}} />
          </AsideMenu>
      </Wrapper>
     
  </Container>)
};

export default Navbar;
