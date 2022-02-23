import React from 'react';
import {Outlet, Link } from "react-router-dom";


const description = {
  color: 'white',
  fontFamily: 'droid sans',
}
const bigFonts = ['3vh', '2vh'];
const smallFonts = ['1.5vh', '1.3vh'];
const bigMargin = '5vh';
const smallMargin = '0.5vh';

const preciosN = ["16,109.99","21,099.50","26,759.99"];
const preciosV = ["20,949.99","27,429.99","34,789.99"];
const capacidades = ["Samsung Digital Inverter 12,000 BTU", "Samsung Digital Inverter 18,000 BTU", "Samsung Digital Inverter 24,000 BTU"];

class Samsung extends React.Component {
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
    if (window.innerWidth > 500){
      return bigFonts;
    } else {
      return smallFonts;
    };
  }

  setMargins(){
    if (window.innerWidth > 500){
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
  <div style={{display:'flex', backgroundColor: 'dodgerblue',height:'100vh'}}>
    <div style={{marginTop:'5vh', width:'20%'}}>
     <Link to= "/nav/productos/Aires/samsung1" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(0,e)}> Samsung Digital Inverter 12,000 BTU </Link>
     <Link to= "/nav/productos/Aires/samsung2" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(1,e)}> Samsung Digital Inverter 18,000 BTU </Link>
     <Link to= "/nav/productos/Aires/samsung3" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(1,e)}> Samsung Digital Inverter 24,000 BTU </Link>
    </div>
    <div style={{width: '80%', marginTop:'2vh', ...description}}>
      <h1 style={{fontSize: this.state.fonts[0],textAlign: 'center'}}> L. {this.state.precioNuevo} <span style={{textDecoration: 'line-through', color: 'black', fontSize: this.state.fonts[0]}}> L. {this.state.precioViejo}</span> </h1>
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

export default Samsung;
