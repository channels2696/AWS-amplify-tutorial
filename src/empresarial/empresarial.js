import React from 'react';
import { Link } from "react-router-dom";

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
        url: this.props.largeImg,
        w2: '100vh',
        msjG: this.props.msjGen,
        titulo: this.props.titulo,
        msjEsp: this.props.msgEspecifico,
      }
    } else {
      this.state={
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
      <div>
        <Link className='button' to='/nav/empresarial' style={{marginLeft: '5vh'}}> Climatización </Link>
        <Link className='button' to='/nav/Solar' style={{marginLeft: '5vh'}}> Solar </Link>

       <div style={{display:'flex'}}>
          <div style={{backgroundColor:'dodgerblue'}}>

            <img src={this.state.url} style={{width: this.state.w2, float:'left', marginRight:'5vh'}}
            alt='Imagen de slideshow'/>

            <p style={{...proyectoS}}>
             {this.state.msjG}
            </p>
             <p style={{...proyectoS}}>
               {this.state.titulo}
             </p>
             <p style={{...proyectoS}}>
             {this.state.msjEsp}
             </p>

         </div>

       </div>
     </div>
    );
  }
}

export default MultSlide;
