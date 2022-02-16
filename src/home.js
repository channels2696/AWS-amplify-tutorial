import background from './airepanels2.jpeg';
import background2 from './airepanels4.jpg';
import background3 from './pv1.jpeg';
import React from 'react';
import logoViento from './logoViento.png';
import SlideImage from './sliderImage';

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
        <span style={{marginLeft: '15px'}}>{this.state.message}</span>
      </div>
    );
  }
}


const HomePage = () => {
  return (
    <div style={{background: 'transparent'}}>
     <div style={{display:'flex'}}>
      <SlideImage b1={background} b2={background2} b3={background3}/>
      <div style={{color:'white', Height: '20vh'}}>
      <p style={{marginLeft:'10%',fontFamily:'Anton',fontSize:'2.5vh',color:'white'}}> Trabaja con nosotros,
      trabaja con expertos... </p>
      <Bullet name='Enfoque' message='Ofrecemos'/>
      <Bullet name='Servicios'  message='Diseñamos e instalamos proyectos a la medida, brindamos las soluciones mas inovadoras que requieran nuestros clientes.'/>
      <Bullet name='Productos' message='Importamos, distribuimos y mantenemos el equipo de mas alta calidad.'/>
       </div>
      <img src={logoViento} alt='Logo inferior'
      style={{position:'static',marginTop:'30vh',right:'0', opacity:'60%',
      width:'40vh', height:'21.35vh'}}/>
      </div>
    </div>
  );
};

export default HomePage;
