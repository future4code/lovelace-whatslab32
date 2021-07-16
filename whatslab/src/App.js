import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: aqua;
  width: 500px;
  margin: 0 auto;
  height: 100vh;
`;

class App extends React.Component {
  state = {};

  //funções aqui

  render() {
    return <MainContainer></MainContainer>;
  }
}

export default App;

