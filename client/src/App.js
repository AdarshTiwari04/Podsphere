import {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
display : flex;
background: ${({theme})=> theme.bgLight};
width: 100%;
height: 100vh;
overflow-x: hidden;
overflow-y: hidden;
`;

const Frame = styled.div`
display: flex;
flex-direction: column;
flex: 3;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
    <BrowserRouter>
    <Container>
      <Sidebar />
      <Frame>PodSphere</Frame>
   </Container>
    </BrowserRouter>
   </ThemeProvider>
    
  );
}

export default App;
