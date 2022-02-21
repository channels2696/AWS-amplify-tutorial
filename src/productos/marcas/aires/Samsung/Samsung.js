import React from 'react';
import {Outlet, Link } from "react-router-dom";


const description = {
  color: 'white',
  fontFamily: 'droid sans',
  marginLeft: '3vh'
}

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
    <div style={{marginTop:'5vh', width:'20%'}}>
     <Link to= "/nav/productos/Aires/samsung1" className='button' style={{marginLeft: '5vh', display: 'block'}} onClick={(e) => this.handleLink(0,e)}> Samsung Digital Inverter 12,000 BTU </Link>
     <Link to= "/nav/productos/Aires/samsung2" className='button' style={{marginLeft: '5vh', display: 'block'}} onClick={(e) => this.handleLink(1,e)}> Samsung Digital Inverter 18,000 BTU </Link>
     <Link to= "/nav/productos/Aires/samsung3" className='button' style={{marginLeft: '5vh', display: 'block'}} onClick={(e) => this.handleLink(1,e)}> Samsung Digital Inverter 24,000 BTU </Link>
    </div>
    <div style={{width: '60%', marginTop:'5vh'}}>
     <img src={this.state.largeImg} style={{width:'100%'}} />
    </div>
    <div style={{...description, width: '20%'}}>
     <h1> L. {this.state.precioNuevo} <span style={{textDecoration: 'line-through', color: 'black'}}> L. {this.state.precioViejo}</span> </h1>
     <h2 style={{textAlign: 'center'}}> {this.state.capacidad} </h2>
     <p> Te calendarizamos mantenimientos periodícos e automáticos para que logres mantener tu equipo como nuevo!</p>
     <p> Pagalo en cuotas con extrafinanciamiento. </p>
     <p> Invierte en marcas ahorradoras, la energía es cada dia mas cara! </p>
     <p> {this.state.bullet1} </p>
     <p> {this.state.bullet2} </p>
     <p> {this.state.bullet3} </p>
     <p> {this.state.bullet4} </p>
    </div>
   </div>
  );
 }
}

export default Samsung;
