import React, { Component } from 'react'
import styled from 'styled-components'

const DivHeader = styled.div`
  background-color: #EDEDED;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  grid-row: 1/2;
  border-radius: 15px 15px 0 0 ;
  font-size: 15px;

`

export default class Header extends Component {
  render() {
    return (
      <DivHeader>
        <h1>Whatslab</h1>
      </DivHeader>
    )
  }
}
