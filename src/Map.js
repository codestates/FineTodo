import React, { useEffect } from 'react';
import KakaoMapScript from "./KakaoMapScript";
import styled from 'styled-components';
import guest from "./assets/guest.png";

export default function Map() {
  const AcaList = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  right: 0%;
  background-color : white;
  z-index: 2;
  `;
  const GuestProfile = styled.div`
  position: absolute;
  width: 30%;
  height: 15%;
  right: 0%;
  background-color : black;
  z-index: 3;
  `;

  const Guest = styled.img.attrs({
    src: `${guest}`,
  })`
  position: absolute;
  width: 7%;
  height: 15%;
  right: 30%;
  z-index: 4;

  `


    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <div id='myMap' style={{
            width: '100%',
            height: '100vh'
        }}>
        <AcaList/> 
        <GuestProfile><Guest/></GuestProfile>
        </div>
        
    );
}