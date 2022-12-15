import styled from "styled-components";
import Login from "./components/Login";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Tela>
        <Login />
      </Tela>
    </>
  );
}

export default App;

const Tela = styled.div`
  min-height: 100vh;
  width: 375px;
  background-color: aliceblue;
`
