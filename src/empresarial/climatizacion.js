import React from 'react';
import {Outlet, Link } from "react-router-dom";
import Empresarial from './empresarial';

const msjAC = "Nuestros proyectos incluyen licitaciones publicas y proyectos privado como el diseño de sistemas centrales VRF para edificios y diseño de cuartos frios para vacunas contra el COVID-19. Ponte en contacto y resolveremos tus problemas!"
const estadoAC = "Proyectos de Climatización"
const msjGeneral =  "Con varios años de experiencia en proyectos comerciales e industriales, puede contar con nosotros en entregarle proyectos de la mejor calidad del mercado. Cuente con nosotros para darle los mejores servicios de diseño, importación, instalación, supervisión, y hasta financiamiento."

const largeImg = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/hvacpr1.png"
const smallImg = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/smallHvacpr.jpeg"

class Climatizacion extends React.Component {

render(){
  return (
  <div style={{backgroundColor: 'dodgerblue', height:'90vh'}}>
    <div>
      <Link className='button' to='/nav/empresarial' style={{marginLeft: '5vh'}}> Climatización </Link>
      <Link className='button' to='/nav/Solar' style={{marginLeft: '5vh'}}> Solar </Link>
    </div>
    <Empresarial largeImg={largeImg} SmallImg={smallImg}msjGen={msjGeneral} titulo={estadoAC} msgEspecifico={msjAC} />
  </div>
  );
 }
}

export default Climatizacion;
