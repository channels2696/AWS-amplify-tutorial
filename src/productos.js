import React, {useState, useEffect}from 'react';


const accessUrl = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/";

const mainDivS = {
  backgroundColor: 'dodgerblue',
  height: '90vh',

}

const headerS ={
  marginLeft: '5vh',
}

const divStyle ={
  width: '100%',
  marginRight: '5vh',
  marginTop: '2vh',

}

const proyectoS = {
  fontFamily: 'droid sans',
  color: 'white',
  fontSize: '2.5vh',
}

const tituloInst = "TODO TIPO de materiales y repuestos para aires"
const tituloAires = "Los aires mas enfriantes!"
const tituloEnergia = "Empieza a ahorrar YA"
const descripInst = ""
const descripAires = "Tenemos todo en aires residenciales, incluyendo capacidades de 12,000 BTU, 18,000 BTU, 24,000 BTU y más. Cotiza con nosotros marcas mundiales como LG, ECOX, y Samsung. Contactános!"
const descripEnergia = ""
const msjGeneral = ""
const arrayInst = [accessUrl + "inst1.png",accessUrl + "inst1.png",accessUrl + "inst1.png"]
const arrayAC = [accessUrl + "aire1.png",accessUrl + "aire2.png",accessUrl + "aire3.png"]
const arraySolar = [accessUrl + "ener1.png",accessUrl + "ener2.png",accessUrl + "ener1.png"]

class MultSlide extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ArraySource: arrayAC,
      counter: 0,
      descrip: descripAires,
      titulo: tituloAires,
      msjStatic: msjGeneral,
    };
  }

  handleClickRight(){
    var count = this.state.counter;
    var size = this.state.ArraySource.length - 1;
    if (this.state.counter === size) {
      count = 0;
    } else {
      count += 1;
    };

    this.setState({
       counter: count,
     });
  }

  handleClickLeft(){
    var count = this.state.counter;
    var size = this.state.ArraySource.length - 1;
    if (this.state.counter === 0) {
      count = size;
    } else {
      count -= 1;
    };

    this.setState({
       counter: count,
     });
  }

  handleAC(){
    this.setState({
      descrip: descripAires,
      titulo: tituloAires,
      ArraySource: arrayAC,
    });
  }

  handleSolar(){
    this.setState({
      descrip: descripEnergia,
      titulo: tituloEnergia,
      ArraySource: arraySolar,
    });
  }

  handleInstaladores(){
    this.setState({
      descrip: descripInst,
      titulo: tituloInst,
      ArraySource: arrayInst,
    });
  }

  render(){
    return(
      <div style={{...mainDivS}}>
        <div style={{...divStyle}}>
          <span className='button' style={{...headerS}} onClick={() => this.handleAC()}> Aires </span>
          <span className='button' style={{...headerS}} onClick={() => this.handleSolar()}> Energía </span>
          <span className='button' style={{...headerS}} onClick={() => this.handleInstaladores()}> Instaladores </span>
        </div>
        <div style={{display: 'flex'}}>
        <div style={{backgroundColor:'white'}}>

           <img src={this.state.ArraySource[this.state.counter]}
            alt='Imagen de slideshow'
            className='slideImage'/>

            <div style={{display:'flex', justifyContent: 'center', backgroundColor:'white'}}>
              <button className='slideButton btnLeft'
                onClick={() => this.handleClickLeft()}>
                <i className='arrow left'></i>
              </button>

              <button className='slideButton btnRight'
                onClick={() => this.handleClickRight()}>
                <i className='arrow right'></i>
              </button>
            </div>
        </div>
        <div style={{backgroundColor: 'dodgerblue'}}>
        <p style={{...proyectoS, ...headerS, fontSize:'2vh'}}>
         {this.state.msjStatic}
        </p>
         <p style={{...proyectoS, ...headerS}}>
           {this.state.titulo}
           <p style={{...proyectoS, ...headerS, fontSize:'2vh'}}>
           {this.state.descrip}
           </p>
         </p>
        </div>
        </div>
      </div>
    );
  }
}

export default MultSlide;
