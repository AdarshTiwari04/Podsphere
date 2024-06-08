import {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
display : flex;
background: ${({theme})=> theme.bg};
width: 100%;
height: 100vh;
overflow-x: hidden;
overflow-y: hidden;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkTheme ? darkTheme : lightTheme}>
    <Container>
      <Sidebar />
    PodSphere
   </Container>
   </ThemeProvider>
    
  );
}

export default App;
