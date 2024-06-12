import React from "react";
import styled from "styled-components";
import { HomeRounded,CloseRounded, SearchRounded, FavoriteRounded, UploadRounded, LightModeRounded, LogoutRounded, DarkModeRounded, CloudUploadRounded} from "@mui/icons-material"
import LogoImage from "../Images/Logo.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  flex:0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};


  @media (max-width: 1100px){
  position: fixed;
  z-index: 1000;
  width:100%;
  max-width: 250px;
  left: ${({menuOpen}) => (menuOpen ?"0" : "-100%")};
  transition: 0.3s ease-in-out;
  }

 `;
const Flex = styled.div`
display : flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0px 12px;
`;  

const Logo = styled.div`
color: ${({ theme }) => theme.primary};
display: flex;
align-items: center;
justify-content: center;
gap: 6px;
font-weight: bold;
font-size: 20px;
margin: 16px 0px;

`;
const Image = styled.img`
  height: 40px;
`;

const Close = styled.div`
display: none;
@media (max-width: 1100px){
display: block;
}
`;

const Elements = styled.div`
padding: 4px 16px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 12px;
cursor: pointer;
color : ${({ theme }) => theme.text_secondary};
&:hover{
background-color: ${({theme})=>theme.text_secondary+ 50};
}
`;
const NavText = styled.div`
padding: 12px 0px;
text-decoration: none;
`;

const HR = styled.div`
width: 100%;
height: 1px;
background-color: ${({ theme }) => theme.text_secondary + 80};
margin: 10px 0px;
`;

const Sidebar =({menuOpen, setMenuOpen, setDarkMode, darkMode}) => { 

  const menuItems= [
    {
      link:"/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
  
    {
      link:"/search",
      name: "Search",
      icon: <SearchRounded />,
    },
  
    {
      link:"/favourties",
      name: "Favourties",
      icon: <FavoriteRounded />,
    }
  ];

  const button = [
    {
      fun:()=> console.log("Upload"),
      name: "Upload",
      icon: <CloudUploadRounded/>,
    },
  
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode ? "Light Mode" : "Dark Mode",
      icon: darkMode ? <LightModeRounded /> : <DarkModeRounded /> ,
    },
  
    {
      fun:()=> console.log("Log Out"),
      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];
  return (
  <MenuContainer menuOpen={menuOpen}>
    <Flex>
    <Logo>
      <Image src={LogoImage} />
      PodSphere</Logo>
    <Close onClick={()=>setMenuOpen(false)}>
      <CloseRounded />
    </Close>
    </Flex>
    {menuItems.map((items) =>
    <Link to={items.link} style={{textDecoration:"none"}}>
    <Elements>
      {items.icon}
      <NavText>{items.name}</NavText>
    </Elements>
    </Link>
  )}  
   <HR />

   {button.map((item) =>(
    <Elements onClick={item.fun}>
      {item.icon}
      <NavText>{item.name}</NavText>
    </Elements>
  ))}
  </MenuContainer>
  );
};

export default Sidebar;