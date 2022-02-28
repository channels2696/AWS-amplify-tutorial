import React from 'react';
import LG from './../LG';
import {Link, Outlet } from "react-router-dom";
import prueba from './../dual.png';


class DUAL extends React.Component {

render(){
  return (
    <div>
     <LG largeImg={prueba} b1="- Conectividad Wi-Fi (ThinQ™ App)" b2="- Ahorro de energía y Enfriamiento más rápido"
     b3="- Micro Filtro que captura y elimina micropartículas de polvo" b4="- 10 años de garantía en el Compresor Dual Inverter"
     smallImg="" pointer={2}/>
    </div>
  );
 }
}

export default DUAL;
