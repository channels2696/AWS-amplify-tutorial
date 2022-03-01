
import logo from './logoReyca.png';
import React from 'react';
import {Outlet, Link } from "react-router-dom";

class AppHeader extends React.Component {
  constructor(props){
    super(props);

    if (window.innerWidth > 700){
      this.state ={
        w: '2.8vh',
        right: '2vh'
      }
    } else {
      this.state={
        w: '1.8vh',
        right: '0'
      };
    };
  }

render(){
  return (
    <div style={{backgroundColor:'dodgerblue'}}>
      <div style={{height:'12vh', display:'flex',
      borderBottomStyle:'solid',borderColor:'white',borderWidth:'thin'}}>
        <Link to="/" style={{marginLeft:'5vh'}}><img src={logo} alt="logo de Reyca" style={{height:'10vh'}}/></Link>
        <nav style={{position:'absolute',top:'1vh',right: this.state.right}}>
          <Link className="button" to="/nav/productos/Aires/dualLG1" style={{fontSize: this.state.w}}>Productos</Link>
          <Link className="button" to="/nav/empresarial" style={{fontSize: this.state.w}}>Empresarial</Link>
          <Link className="button" to="/nav/contactenos" style={{fontSize: this.state.w}}>Contáctanos</Link>
        </nav>
      </div>
      <Outlet/>
    </div>
  );
 }
}

export default AppHeader;
