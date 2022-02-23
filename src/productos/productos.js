import React from 'react';
import {Outlet, Link } from "react-router-dom";

const tituloInst = "TODO TIPO de materiales y repuestos para aires"
const tituloAires = "Los aires mas enfriantes!"
const tituloEnergia = "Empieza a ahorrar YA"
const descripInst = ""
const descripAires = "Tenemos todo en aires residenciales, incluyendo capacidades de 12,000 BTU, 18,000 BTU, 24,000 BTU y más. Cotiza con nosotros marcas mundiales como LG, ECOX, y Samsung. Contactános!"
const descripEnergia = ""
const msjGeneral = ""

const pStyle={
  fontSize: '2.8vh',
  fontFamily: 'droid sans',
  color: 'white',
  marginRight: '5vh',
  marginTop: '2.5vh'
}


class MultSlide extends React.Component{
  constructor(props){
    super(props);

    if (window.innerWidth > 500){
      this.state ={
        font: '2.8vh'
      }
    } else {
      this.state={
        font: '1.8vh'
      };
    };
  }

  render(){
    return(
      <div>
      <div style={{backgroundColor: 'dodgerblue', display: 'flex', justifyContent: 'center'}}>
        <span style={{...pStyle, fontSize:this.state.font}}> Escoja una Categoria: </span>
        <Link className='button' to="/nav/productos/Aires/dualLG1" style={{fontSize:this.state.font}}> Aires </Link>
        <Link className='button' to="/nav/productos/Energia" style={{fontSize:this.state.font}}> Energía </Link>
        <Link className='button' to="/nav/productos/Instaladores" style={{fontSize:this.state.font}}> Instaladores </Link>
      </div>
      <Outlet/>
      </div>
      );
    }
}
export default MultSlide;
