import React, {useState, useEffect}from 'react';
import h1 from './hvacpr1.png';
import h2 from './hvacpr2.png';
import h3 from './hvacpr3.png';
import s1 from './solpr1.png';
import s2 from './solpr2.png';
import s3 from './solpr3.png';

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

const msjAC = "Nuestros proyectos incluyen licitaciones publicas y proyectos privado como el diseño de sistemas centrales VRF para edificios y diseño de cuartos frios para vacunas contra el COVID-19. Ponte en contacto y resolveremos tus problemas!"
const msjSolar = "Hemos realizado proyectos de mas de 350KW en zonas industriales y realizado estudios de decenas de Megavatios. Ahorrandole a nuestros clientes millones de lempiras anualmente. Ponte en contacto para ver como te podemos ayudar!"
const estadoAC = "Proyectos de Climatización"
const estadoSolar = "Proyectos Solares"
const arrayAC = [h1,h2,h3]
const arraySolar = [s1,s2,s3]
const msjGeneral =  "Con varios años de experiencia en proyectos comerciales e industriales, puede contar con nosotros en entregarle proyectos de la mejor calidad del mercado. Cuente con nosotros para darle los mejores servicios de diseño, importación, instalación, supervisión, y hasta financiamiento."

class MultSlide extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ArraySource: arrayAC,
      counter: 0,
      descrip: msjAC,
      titulo: estadoAC,
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
      descrip: msjAC,
      titulo: estadoAC,
      ArraySource: arrayAC,
    });
  }

  handleSolar(){
    this.setState({
      descrip: msjSolar,
      titulo: estadoSolar,
      ArraySource: arraySolar,
    });
  }

  render(){
    return(
      <div style={{...mainDivS}}>
        <div style={{...divStyle}}>
          <span className='button' style={{...headerS}} onClick={() => this.handleAC()}> Climatización </span>
          <span className='button' style={{...headerS}} onClick={() => this.handleSolar()}> Solar </span>
          <span/>
        </div>
        <div style={{display:'flex'}}>
        <div style={{backgroundColor:'white'}}>

           <img src={this.state.ArraySource[this.state.counter]}
            alt='Imagen de slideshow'
            className='slideImage'/>

            <div style={{display:'flex', justifyContent: 'center',backgroundColor:'white'}}>
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
