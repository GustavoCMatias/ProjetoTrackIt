import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";
import Hoje from "./components/Hoje";
import Historico from "./components/Historico";
import GlobalStyle from "./globalStyles";
import AuthContext from "./contexts/AuthContext";
import FotoContext from "./contexts/FotoContext";
import CompletosContext from "./contexts/CompletosContext";
import React from "react";

function App() {
  const [foto, setFoto] = React.useState('')
  const [token, setToken] = React.useState('')
  const [completos, setCompletos] = React.useState({completos: 0, total: 1})

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <FotoContext.Provider value={{foto, setFoto}}>
        <CompletosContext.Provider value={{completos, setCompletos}}>
          <BrowserRouter>
            <GlobalStyle />
            <Tela>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/habitos" element={<Habitos />} />
                <Route path="/hoje" element={<Hoje />} />
                <Route path="/historico" element={<Historico />} />
              </Routes>
            </Tela>
          </BrowserRouter>
        </CompletosContext.Provider>
      </FotoContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

const Tela = styled.div`
  min-height: 100vh;
  width: 375px;
  background-color: #E5E5E5;
`
