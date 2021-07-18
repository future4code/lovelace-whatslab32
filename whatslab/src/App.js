import React from "react";
import styled, { css } from "styled-components";
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
  background-color: #e5ddd5;
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

  span {
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }

  span:nth-child(1) {
  }
  span:nth-child(2) {
    margin-bottom: 5px;
  }
`;

const BlocoMensagem = styled.div`
  max-width: 70%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.05);
  height: auto;
  padding: 10px;

  margin: ${(props) => {
    if (props.usuario === "eu") {
      return "3px 7px 3px auto";
    } else {
      return "3px auto 3px 7px";
    }
  }};

  border-radius: ${(props) => {
    if (props.usuario === "eu") {
      return "15px 15px 0 15px";
    } else {
      return "0 15px 15px 15px";
    }
  }};

  background-color: ${(props) => {
    if (props.usuario === "eu") {
      return "#DCF8C6";
    } else {
      return "#f0f0f0";
    }
  }};
`;

class App extends React.Component {
  state = {
    arrMensagens: [],

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

    this.setState({ valorInputMensagem: "" });
    this.setState({ valorInputUsuario: "" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const listaDeMensagems = this.state.arrMensagens.map((elemento, index) => {
      if (elemento.usuario.toLowerCase() === "eu" || elemento.usuario.toLowerCase() === "") {
        return (
          <BlocoMensagem key={index} usuario={"eu"}>
            {/* <span>
              <strong>{elemento.usuario}</strong>
            </span> */}
            <span>{elemento.mensagem}</span>
          </BlocoMensagem>
        );
      } else {
        return (
          <BlocoMensagem key={index} usuario={"outro"}>
            <span>
              <strong>{elemento.usuario}</strong>
            </span>
            <span>{elemento.mensagem}</span>
          </BlocoMensagem>
        );
      }
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
