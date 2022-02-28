import React from 'react';
import Samsung from './Samsung';
import {Link, Outlet } from "react-router-dom";
import prueba from './samsung.png'

class SAMSUNG extends React.Component {

render(){
  return (
    <div>
     <Samsung largeImg={prueba} b1="- El modo de rápido enfriamiento utiliza la velocidad de ventilador más rápida y luego disminuye su velocidad"
     b2="- El aire que respires será limpio y fresco. El filtro HD es muy efectivo para retener el polvo, los contaminantes transmitidos por aire y los alérgenos"
     b3="- Podrás ahorrar dinero todos los días con la tecnología Digital Inverter. Conserva la temperatura deseada sin la necesidad de encender y apagar constantemente, por lo que hay menos fluctuación."
     b4="- El DuraFin+ está compuesto por material anticorrosivo para proteger el condensador contra la oxidación, lo que ayuda a mantener un óptimo rendimiento del intercambiador de calor"
     smallImg="" pointer={1}/>
    </div>
  );
 }
}

export default SAMSUNG;
