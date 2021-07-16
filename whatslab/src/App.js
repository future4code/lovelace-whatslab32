import React from "react";
import styled from "styled-components";
import Inputs from './Components/inputs/inputs'
import Header from './Components/Header/Header'
import Mensagens from './Components/Mensagens/Mensagens' 
const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #272727;
  width: 100vw;
  margin: 0 auto;
  height: 100vh;
  padding: 1rem;
`;

const ContainerInterno = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 100%;
  display: grid;
  grid-template-rows: 60px 1fr 80px;
  border-radius: 15px;
  box-shadow: 2px 3px 6px rgba(0,0,0,0.05);

`

class App extends React.Component {
  state = {
    mensagens :[
      {
        usuario: "",
        mensagem: "",
      }
    ]
  };

adicionaMensagem = () => {
  const novaMensagem = {
    usuario: this.state.valorInputUsuario,
    mensagem: this.state.valorInputMensagem,
  }
  const novoMensagem = [...this.state.mensagem, novaMensagem]
  this.setState({mensagem: novoMensagem});
}
onChangeInputUsuario = (event) => {
  this.setState({valorInputUsuario: event.targe.value})
}
onChangeInputMensagem = (event) => {
  this.setState({valorInputMensagem: event.target.value})
}

  //funções aqui

  render() {
    return <MainContainer>
      <ContainerInterno>
        <Header></Header>
        <Mensagens></Mensagens>
        <Inputs></Inputs>
      </ContainerInterno>
    </MainContainer>;
    }
}

export default App;

