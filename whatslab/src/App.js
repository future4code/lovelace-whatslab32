import React from "react";
import styled from "styled-components";
import Inputs from './Components/inputs/inputs'

const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: aqua;
  width: 500px;
  margin: 0 auto;
  height: 100vh;
  padding: 1rem;
`;

const ContainerInterno = styled.div`
  background-color: azure;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 40px 1fr 80px;
`

class App extends React.Component {
  state = {};

  //funções aqui

  render() {
    return <MainContainer>
      <ContainerInterno>
        <Inputs></Inputs>
      </ContainerInterno>
    </MainContainer>;
    }
}

export default App;

