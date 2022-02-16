
import logo from './logoReyca.png';
import React from 'react';
import {Outlet, Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div style={{backgroundColor:'dodgerblue'}}>
      <div style={{height:'12vh', display:'flex',
      borderBottomStyle:'solid',borderColor:'white',borderWidth:'thin'}}>
        <img src={logo} alt="logo de Reyca" style={{height:'10vh',marginLeft:'5%'}}></img>
        <nav style={{position:'absolute',top:'1vh',right:'2vh'}}>
          <Link className="button" to="/nav/productos">Productos</Link>
          <Link className="button" to="/nav/empresarial">Empresarial</Link>
          <Link className="button" to="/nav/contactenos">Contáctanos</Link>
        </nav>
      </div>
      <Outlet/>
    </div>
  );
};

export default AppHeader;
