import React from 'react';
import LG from './../LG';
import {Link, Outlet } from "react-router-dom";
import prueba from './../ArtCool1.png';

class ARTCOOL extends React.Component {

render(){
  return (
    <div>
     <LG largeImg={prueba} b1="- DUAL Inverter" b2="- Goldfin"
     b3="- Protector de Voltaje" b4="- ThinQ Wifi" smallImg="" pointer={5}/>
    </div>
  );
 }
}

export default ARTCOOL;
