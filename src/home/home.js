import logoViento from './logoViento.png';
import home from './ArtCool3.png';

import React from 'react';

const accessUrl = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/home1.png"
const smallImg = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/smallHome.jpg"

function ResponsiveImage(){

    return(
   <img src={home} style={{width:'50%', float:'left'}}/>
 );

}

class Bullet extends React.Component{
  constructor(props){
    super(props);

    if (window.innerWidth > 700){
      this.state ={
        icon: '+ ',
        name: this.props.name,
        message: null,
        changed: false,
      };
    } else {
      this.state ={
        icon: '- ',
        name: this.props.name,
        message: this.props.message,
        changed: true,
      };
    };
  }

  changeState(){
    if (!this.state.changed){
      this.setState({
        icon: '- ',
        message: this.props.message,
        changed: true,
      });
    } else {
      this.setState({
        icon: '+ ',
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
        w: '30%'
      };
    };
  }

  render(){
   return (
    <div style={{backgroundColor: 'dodgerblue'}}>
      <img src={home} style={{width:'50%', float:'left'}}/>

      <p style={{marginLeft:'10%',fontFamily:'Anton',fontSize:'2.5vh',color:'white'}}> Trabaja con nosotros,
      trabaja con expertos... </p>
      <Bullet name='Proyectos' message='Diseñamos e instalamos proyectos solares y de climatización, brindamos las soluciones mas inovadoras que requieran nuestros clientes.'/>
      <Bullet name='Servicios'  message='Brindamos servicios de diseño, importación, instalación, supervisión, y hasta financiamiento.'/>
      <Bullet name='Productos' message='Distribuimos equipo de alta calidad, si eres instalador o cliente final, te encontrarás en buenas manos.'/>
        <img src={logoViento} alt='Logo inferior' style={{width: this.state.w, float:'right'}}/>
    </div>
   );
 }
};

export default HomePage;
