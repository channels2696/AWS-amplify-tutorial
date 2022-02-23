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

const preciosN = ["11,219.99","36,939.99"];
const preciosV = ["14,589.99","48,029.99"];
const capacidades = ["ECOX Inverter 12,000 BTU", "ECOX Inverter 36,000 BTU"];

class Ecox extends React.Component {
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
      size: window.innerWidth,
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

  handleResize = () => {
    this.setState({
      size: window.innerWidth
    });
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
  }

render(){
  return (
  <div style={{display:'flex', backgroundColor: 'dodgerblue',height:'90vh'}}>
    <div style={{marginTop:'5vh', width:'20%'}}>
     <Link to= "/nav/productos/Aires/ecox1" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(0,e)}> ECOX Inverter 12,000 BTU </Link>
     <Link to= "/nav/productos/Aires/ecox2" className='button' style={{marginLeft: this.state.margin, display: 'block', fontSize: this.state.fonts[0]}} onClick={(e) => this.handleLink(1,e)}> ECOX Inverter 36,000 BTU </Link>

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

export default Ecox;
