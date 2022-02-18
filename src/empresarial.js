import React from 'react';

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
const msjGeneral =  "Con varios años de experiencia en proyectos comerciales e industriales, puede contar con nosotros en entregarle proyectos de la mejor calidad del mercado. Cuente con nosotros para darle los mejores servicios de diseño, importación, instalación, supervisión, y hasta financiamiento."

class MultSlide extends React.Component{
  constructor(props){
    super(props);

    if (window.innerWidth > 500){
      this.state ={
        w: '50%',
        url: this.props.largeImg,
        w2: '100vh',
        msjG: this.props.msjGen,
        titulo: this.props.titulo,
        msjEsp: this.props.msgEspecifico,
      }
    } else {
      this.state={
        w: '100%',
        url: this.props.SmallImg,
        w2: '30vh',
        msjG: this.props.msjGen,
        titulo: this.props.titulo,
        msjEsp: this.props.msgEspecifico,
      };
    };
  }
  render(){
    return(
      <div style={{display:'flex'}}>
         <div style={{backgroundColor:'dodgerblue', width: this.state.w}}>

           <img src={this.state.url} style={{width: this.state.w2}}
            alt='Imagen de slideshow'/>
        </div>
         <div style={{backgroundColor: 'dodgerblue'}}>
         <p style={{...proyectoS, ...headerS, fontSize:'2vh'}}>
          {this.state.msjG}
         </p>
          <p style={{...proyectoS, ...headerS}}>
            {this.state.titulo}
            <p style={{...proyectoS, ...headerS, fontSize:'2vh'}}>
            {this.state.msjEsp}
            </p>
          </p>
         </div>
      </div>
    );
  }
}

export default MultSlide;
