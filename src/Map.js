import React, { useEffect } from 'react';
import KakaoMapScript from "./KakaoMapScript";


export default function Map() {


    useEffect(() => {
        KakaoMapScript();
    }, []);
    

    return (
        <div id='myMap' style={{
            width: '73%',
            height: '100vh'
        }}>
        </div>
        
    );
}