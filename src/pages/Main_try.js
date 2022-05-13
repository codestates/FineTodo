import styled from 'styled-components';
import React from "react";
import Map from "../Map"
import List from "./components/list"


export default function Main_try() {

  const Container = styled.div`
  display: flex;
  `;


return (

  <div className='container'>
    <Container>
  <Map/>
  <List></List>
    </Container>

  </div>
)
}