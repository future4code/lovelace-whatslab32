import React from "react";
import styled from "styled-components";
import Inputs from "./Components/inputs/inputs";
import Header from "./Components/Header/Header";

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
  background-color: #E5DDD5;
  width: 500px;
  height: 100%;
  display: grid;
  grid-template-rows: 60px 1fr 80px;
  border-radius: 15px;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.05);
`;

const ContainerMensagens = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;
  height: 100%;
  max-width: 100%;
  overflow: auto;
  
  div {
    margin: 7px auto 7px 7px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;

    height: auto;
    padding: 10px;
    background-color: #F0F0F0;
    border-radius: 0 15px 15px 15px;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.05);
    max-width: 100%;
    
  }

  span{ 
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;  }  

  span:nth-child(1) {
  }
  span:nth-child(2) {
    margin-bottom: 5px;
  }
`;

class App extends React.Component {
  state = {
    arrMensagens: [ ],


    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };

    const novoArrayMensagem = [novaMensagem, ...this.state.arrMensagens];

    this.setState({ arrMensagens: novoArrayMensagem });

    this.setState({valorInputMensagem: ""})
    this.setState({valorInputUsuario: ""})

  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const listaDeMensagems = this.state.arrMensagens.map((elemento, index) => {
      return (
        <div key={index}>
          <span><strong>{elemento.usuario}</strong></span>
          <span>{elemento.mensagem}</span>
        </div>
      );
    });

    return (
      <MainContainer>
        <ContainerInterno>
          <Header />
          <ContainerMensagens>{listaDeMensagems}</ContainerMensagens>
          <Inputs
            valueUsuario={this.state.valorInputUsuario}
            valueMensagem={this.state.valorInputMensagem}
            onChrangeUsuario={this.onChangeInputUsuario}
            onChrangeMensagem={this.onChangeInputMensagem}
            onClickBotao={this.adicionaMensagem}
          />
        </ContainerInterno>
      </MainContainer>
    );
  }
}

export default App;
