import React from "react";
import Inputs from "./Components/inputs/inputs";
import Header from "./Components/Header/Header";

import { MainContainer } from './App.styled'
import { ContainerInterno } from './App.styled'
import { ContainerMensagens } from './App.styled'
import { MensagemEUsuario } from './App.styled'
import { BlocoMensagem } from './App.styled'


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
    // this.setState({ valorInputUsuario: "" });
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
          <MensagemEUsuario>
            <p>
              {elemento.usuario}
            </p>
            <BlocoMensagem key={index} usuario={"outro"}>
              <span>{elemento.mensagem}</span>
            </BlocoMensagem>
          </MensagemEUsuario>
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
