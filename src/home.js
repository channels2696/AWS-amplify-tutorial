import logoViento from './logoViento.png';
import React from 'react';

const accessUrl = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/home1.png"
const accessUrl2 = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/home2.png"

class ResponsiveImage extends React.Component{
  constructor(props){
    super(props);

    if (window.innerWidth > 500){
      this.state ={
        url: accessUrl
      }
    } else {
      this.state={
        url: accessUrl2
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
      icon: '- ',
      name: '',
      message: this.props.message,
      changed: true,
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
        <span style={{marginLeft: '15px'}}>{this.state.message}</span>
      </div>
    );
  }
}


class HomePage extends React.Component{

  render(){
   return (
    <div style={{background: 'transparent'}}>
     <div style={{display:'flex', justifyContent:'center'}}>
      <ResponsiveImage/>

      <div style={{color:'white', width:'30%'}}>
      <p style={{marginLeft:'10%',fontFamily:'Anton',fontSize:'2.5vh',color:'white'}}> Trabaja con nosotros,
      trabaja con expertos... </p>
      <Bullet name='Enfoque' message='Ofrecemos productos de equipo solar y de climatización, inluyendo materiales y repuestos asociados.'/>
      <Bullet name='Servicios'  message='Diseñamos e instalamos proyectos a la medida, brindamos las soluciones mas inovadoras que requieran nuestros clientes.'/>
      <Bullet name='Productos' message='Importamos, distribuimos y mantenemos el equipo de mas alta calidad.'/>
       </div>
      <img src={logoViento} alt='Logo inferior'
      style={{position:'static',marginTop:'30vh',right:'0', opacity:'60%',
      width:'20%', height:'21.35vh'}}/>
      </div>
    </div>
   );
 }
};

export default HomePage;
