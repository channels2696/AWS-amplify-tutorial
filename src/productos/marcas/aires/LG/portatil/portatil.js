import React from 'react';
import LG from './../LG';
import {Link, Outlet } from "react-router-dom";
import prueba from './../portatil.png'

class Port extends React.Component {

render(){
  return (
    <div>
     <LG largeImg={prueba} b1="- Practicidad y comodidad, se desplaza fácilmente ya que cuenta con ruedas giratorias"
      b2="- Control Inteligente, trabaja con LG ThinQ™ y funciona con el Asistente de Google"
      b3="- Kit de instalación para Ventana" b4="- Hasta 40% más de ahorro de energía con Compresor Dual Inverter"
      smallImg="" pointer={6}/>
    </div>
  );
 }
}

export default Port;
