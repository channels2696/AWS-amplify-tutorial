import React from 'react';
import LG from './LG';
import {Link, Outlet } from "react-router-dom";
import prueba from './aire1.jpeg'

class DUAL extends React.Component {

render(){
  return (
    <div>
     <LG largeImg={prueba} b1="- Conectividad Wi-Fi (ThinQ™ App)" b2="- Ahorro de energía y Enfriamiento más rápido"
     b3="- Micro Filtro que captura y elimina micropartículas de polvo" b4="- 10 años de garantía en el Compresor Dual Inverter"/>
    </div>
  );
 }
}

export default DUAL;