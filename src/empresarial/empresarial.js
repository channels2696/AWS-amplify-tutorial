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
