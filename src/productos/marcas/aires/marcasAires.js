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

render(){
  return (
  <div style={{backgroundColor: 'dodgerblue', display:'flex', justifyContent: 'center'}}>
    <span style={{...pStyle}}> Escoja una Marca: </span>
    <Link className='button' to="/nav/productos/Aires/dualLG1"> LG </Link>
    <Link className='button' to="/nav/productos/Aires/ecox1"> Ecox </Link>
    <Link className='button' to="/nav/productos/Aires/samsung1"> Samsung </Link>
  </div>
  );
 }
}

export default MarcasAires;
