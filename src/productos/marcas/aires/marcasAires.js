import React from 'react';
import {Link } from "react-router-dom";

const pStyle={
  fontSize: '2.8vh',
  fontFamily: 'droid sans',
  color: 'white',
  marginRight: '5vh',
  marginTop: '2.5vh'
}



class MarcasAires extends React.Component {
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
  return (
  <div style={{backgroundColor: 'dodgerblue', display:'flex', justifyContent: 'center'}}>
    <span style={{...pStyle, fontSize:this.state.font}}> Escoja una Marca: </span>
    <Link className='button' to="/nav/productos/Aires/dualLG1" style={{fontSize:this.state.font}}> LG </Link>
    <Link className='button' to="/nav/productos/Aires/ecox1" style={{fontSize:this.state.font}}> Ecox </Link>
    <Link className='button' to="/nav/productos/Aires/samsung1" style={{fontSize:this.state.font}}> Samsung </Link>
  </div>
  );
 }
}

export default MarcasAires;
