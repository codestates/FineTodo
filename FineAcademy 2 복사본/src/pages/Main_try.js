import styled from 'styled-components';
import React from "react";
import Map from "../Map"

export default function Main_try() {

  const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  `;


return (

  <div className='container'>
    <Container>
  <Map/>
    </Container>

  </div>
)
}