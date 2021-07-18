import styled from "styled-components";

export const MainContainer = styled.div`
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

export const ContainerInterno = styled.div`
  background-color: #e5ddd5;
  width: 500px;
  height: 100%;
  display: grid;
  grid-template-rows: 60px 1fr 80px;
  border-radius: 15px;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.05);
`;

export const ContainerMensagens = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;
  height: 100%;
  max-width: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;        /* color of the tracking area */
}
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid transparent;  /* creates padding around scroll thumb */
}


  span {
    word-wrap: break-word;
  }

  `;
export const MensagemEUsuario = styled.div`
  margin: ${(props) => {
    if (props.usuario === "eu") {
      return "3px 7px 3px auto";
    } else {
      return "3px auto 3px 7px";
    }
  }};
  max-width: 70%;

  p{
    margin: 0 0 3px 10px;
    font-size: 12px;
    color: #5c8065;
    font-weight: 600;
  }
`


export const BlocoMensagem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.05);
  height: auto;
  padding: 10px;

  max-width: ${(props) => {
    if (props.usuario === "eu") {
      return "70%";
    }
  }};

  margin: ${(props) => {
    if (props.usuario === "eu") {
      return "3px 7px 3px auto";
    } else {
      return "3px auto 3px 7px";
    }
  }};

  border-radius: ${(props) => {
    if (props.usuario === "eu") {
      return "10px 10px 0 10px";
    } else {
      return "0 10px 10px 10px";
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


// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// labore et dolore magna aliqua.
// Lorem ipsum dolor sit amet
// Lorem ipsum dolor sit amet
// labore et dolore magna aliqua.
