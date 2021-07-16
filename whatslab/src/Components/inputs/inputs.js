import React, { Component } from "react";
import styled from "styled-components";
import SendWhite from "./img/send_white.png";

const DivInputs = styled.div`
  box-sizing: border-box;
  grid-row: 3/-1;
  height: 100%;
  width: 100%;

  div {
    width: 100%;
    height: 100%;
    display: grid;
    padding: 1rem;
    grid-template-columns: 20% 70% 10%;
    box-sizing: border-box;
    align-items: center;
    justify-items: center;
    background-color: #f0f0f0;
    border-radius: 0 0 15px 15px;
  }
  input {
    background-color: #ffffff;
    width: 95%;
    box-sizing: border-box;
    margin-right: 10px;
    height: 100%;
    resize: none;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.05);
    color: #919191;

    &:focus {
      outline: 0;
    }
  }
  button {
    border-radius: 30px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    background-color: white;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;

    :hover {
      cursor: pointer;
      background-color: #f7f7f7;
    }
  }
`;

export default class Inputs extends Component {
  render() {
    return (
      <DivInputs>
        <div>
          <input
            value={this.props.valueUsuario}
            onChange={this.props.onChrangeUsuario}
            placeholder="Nome"
            type="text"
          />
          <input
            value={this.props.valueMensagem}
            onChange={this.props.onChrangeMensagem}
            placeholder="Mensagem..."
            type="text"
          />
          <button
            onClick={this.props.onClickBotao}  
          >
            <img src={SendWhite} alt="Enviar" />
          </button>
        </div>
      </DivInputs>
    );
  }
}
