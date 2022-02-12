
import logo from './logoReyca.png'
import React from 'react'
import {Outlet, Link } from "react-router-dom"
import WebFont from 'webfontloader'
import './App.css'


WebFont.load({
    google: {
      families:['Anton','Droid Sans']
    }
  });

const AppHeader = () => {
  return (
    <div style={{height:'100vh',backgroundColor:'dodgerblue'}}>
      <div style={{height:'12vh', display:'flex'}}>
        <img src={logo} alt="logo de Reyca" style={{height:'10vh',marginLeft:'5%'}}></img>
        <nav style={{position:'absolute',top:'1vh',right:'2vh'}}>
          <Link className="button" to="/productos">Productos</Link>
          <Link className="button" to="/empresarial">Empresarial</Link>
          <Link className="button" to="/contactenos">Contactenos</Link>
        </nav>
      </div>
      <Outlet/>
    </div>
  );
};

export default AppHeader;