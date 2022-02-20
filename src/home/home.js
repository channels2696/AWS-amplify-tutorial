import logoViento from './logoViento.png';

import React from 'react';

const accessUrl = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/home1.png"
const smallImg = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/smallHome.jpg"

class ResponsiveImage extends React.Component{
  constructor(props){
    super(props);

    if (window.innerWidth > 500){
      this.state ={
        url: accessUrl
      }
    } else {
      this.state={
        url: smallImg
      };
    };
  }

  render(){
    return(
   <img src={this.state.url} style={{width:'50%'}}/>
 );
}
}

class Bullet extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      icon: '+ ',
      name: this.props.name,
      message: null,
      changed: false,
    };
  }

  changeState(){
    if (!this.state.changed){
      this.setState({
        icon: '- ',
        name: '',
        message: this.props.message,
        changed: true,
      });
    } else {
      this.setState({
        icon: '+ ',
        name: this.props.name,
        message: null,
        changed: false,
      });
    };
  }

  handleClick(){
    this.changeState();
  }

  render(){
    return(
      <div style={{marginBottom:'25px'}}>
        <button className='bullets' onClick={() => this.handleClick()}>
        {this.state.icon + this.state.name}
        </button>
        <p style={{marginLeft: '3vh'}}>{this.state.message}</p>
      </div>
    );
  }
}


class HomePage extends React.Component{
  constructor(props){
    super(props);

    if (window.innerWidth > 500){
      this.state ={
        w: '20%'
      }
    } else {
      this.state={
        w: '0'
      };
    };
  }

  render(){
   return (
    <div style={{backgroundColor: 'dodgerblue'}}>
     <div style={{display:'flex', justifyContent:'start'}}>
      <ResponsiveImage/>

      <div style={{color:'white', width:'30%'}}>
      <p style={{marginLeft:'10%',fontFamily:'Anton',fontSize:'2.5vh',color:'white'}}> Trabaja con nosotros,
      trabaja con expertos... </p>
      <Bullet name='Proyectos' message='Diseñamos e instalamos proyectos solares y de climatización, brindamos las soluciones mas inovadoras que requieran nuestros clientes.'/>
      <Bullet name='Servicios'  message='Brindamos servicios de diseño, importación, instalación, supervisión, y hasta financiamiento.'/>
      <Bullet name='Productos' message='Distribuimos equipo de alta calidad, si eres instalador o cliente final, te encontrarás en buenas manos.'/>
       </div>
      <div style={{width: this.state.w}}>
        <img src={logoViento} alt='Logo inferior'
        style={{position:'static',marginTop:'30vh',right:'0', opacity:'60%',
        width:'80%', height:'21.35vh'}}/>
      </div>
      </div>
    </div>
   );
 }
};

export default HomePage;
