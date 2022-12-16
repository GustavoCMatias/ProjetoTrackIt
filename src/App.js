import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";
import GlobalStyle from "./globalStyles";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Tela>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/teste" element={<Habitos/>}/>
        </Routes>        
      </Tela>
    </BrowserRouter>
  );
}

export default App;

const Tela = styled.div`
  min-height: 100vh;
  width: 375px;
  background-color: aliceblue;
`
