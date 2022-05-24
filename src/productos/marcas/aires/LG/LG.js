import React from 'react';
import {Outlet, Link } from "react-router-dom";


const description = {
  color: 'white',
  fontFamily: 'droid sans'
}

const bigFonts = ['3vh', '2vh'];
const smallFonts = ['1.5vh', '1.3vh'];
const bigMargin = '5vh';
const smallMargin = '0.5vh';
const preciosN = ["14,903.23","19,380.17","28,761.69","17,899.99","22,059.99","29,949.99","16,694.58"];
const preciosV = ["18,500.50","24,050.30","35,618.70","23,268.70","28,677.99","38,934.99","20,669.99"];
const capacidades = ["LG DUAL Inverter 12,000 BTU", "LG DUAL Inverter 18,000 BTU", "LG DUAL Inverter 24,000 BTU", "LG ARTCOOL 12,000 BTU","LG ARTCOOL 18,000 BTU","LG ARTCOOL 24,000 BTU","LG PORTÁTIL 14,000 BTU"];

class LG extends React.Component {
  constructor(props){
    super(props);

    this.state={
      largeImg: this.props.largeImg,
      smallImg: this.props.smallImg,
      bullet1: this.props.b1 ,
      bullet2: this.props.b2 ,
      bullet3: this.props.b3 ,
      bullet4:this.props.b4 ,
      precioViejo: preciosV[this.props.pointer],
      precioNuevo: preciosN[this.props.pointer],
      capacidad: capacidades[this.props.pointer],
      fonts: this.setFonts(),
      margin: this.setMargins(),
    };



  }

  setFonts(){
    if (window.innerWidth > 700){
      return bigFonts;
    } else {
      return smallFonts;
    };
  }

  setMargins(){
    if (window.innerWidth > 700){
      return bigMargin;
    } else {
      return smallMargin;
    };
  }

  handleLink(pointer){
    this.setState({
      precioNuevo: preciosN[pointer],
      precioViejo: preciosV[pointer],
      capacidad: capacidades[pointer],
    });
  }


render(){
  return (
  <div style={{display:'flex', backgroundColor: 'dodgerblue',height:'90vh'}}>
    <div style={{marginTop: this.state.margin, width:'20%'}}>
     <Link to= "/nav/productos/Aires/dualLG1" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(0,e)}> LG DUAL Inverter 12,000 BTU </Link>
     <Link to= "/nav/productos/Aires/dualLGd2" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(1,e)}> LG DUAL Inverter 18,000 BTU </Link>
     <Link to= "/nav/productos/Aires/dualLGd3" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(2,e)}> LG DUAL Inverter 24,000 BTU </Link>
     <Link to= "/nav/productos/Aires/artcool1" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(3,e)}> LG ARTCOOL 12,000 BTU </Link>
     <Link to= "/nav/productos/Aires/artcool2" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(4,e)}> LG ARTCOOL 18,000 BTU </Link>
     <Link to= "/nav/productos/Aires/artcool3" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(5,e)}> LG ARTCOOL 24,000 BTU </Link>
     <Link to= "/nav/productos/Aires/portatil" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(6,e)}> LG PORTÁTIL 14,000 BTU </Link>
    </div>
    <div style={{width: '80%', marginTop:'2vh', ...description}}>
      <h1 style={{fontSize: this.state.fonts[0],textAlign: 'center'}}> L. {this.state.precioNuevo}</h1>
      <h2 style={{textAlign: 'center', fontSize: this.state.fonts[0]}}> {this.state.capacidad} </h2>
       <img src={this.state.largeImg} style={{width:'60%', float: 'left' ,marginRight: this.state.margin}} />
       <p style={{fontSize: this.state.fonts[1]}}> Envíos e instalación gratuitas!! Te calendarizamos mantenimientos periodícos e automáticos para que logres mantener tu equipo como nuevo!</p>
       <p style={{fontSize: this.state.fonts[1]}}> Pagalo en cuotas con extrafinanciamiento. </p>
       <p style={{fontSize: this.state.fonts[1]}}> Invierte en marcas ahorradoras, la energía es cada dia mas cara! </p>
       <p style={{fontSize: this.state.fonts[1]}}> {this.state.bullet1} </p>
       <p style={{fontSize: this.state.fonts[1]}}> {this.state.bullet2} </p>
       <p style={{fontSize: this.state.fonts[1]}}> {this.state.bullet3} </p>
       <p style={{fontSize: this.state.fonts[1]}}> {this.state.bullet4} </p>
    </div>
   </div>
  );
 }
}

export default LG;
