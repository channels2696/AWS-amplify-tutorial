import background from './Images/airepanels2.jpg'
import background2 from './Images/airepanels4.jpg'
import background3 from './Images/pv1.jpeg'
import React from 'react'
import './App.css'
import logoViento from './logoViento.png'

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

class SlideImage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ArraySource: [background,background2,background3],
      counter: 0,
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

  render(){
    return(
      <div style={{backgroundColor:'orange',maxHeight:'60vh'}}>
        <img src={this.state.ArraySource[this.state.counter]}
          alt='Imagen de slideshow'
          className='slideImage'/>

        <button className='slideButton btnLeft'
          onClick={() => this.handleClickLeft()}>
          <i className='arrow left'></i>
        </button>

        <button className='slideButton btnRight'
        onClick={() => this.handleClickRight()}>
        <i className='arrow right'></i>
        </button>
      </div>
    );
  }
}

const HomePage = () => {
  return (
    <div style={{backgroundColor:'dodgerblue'}}>
      <SlideImage/>
      <div style={{color:'white', Height: '20vh'}}>
      <p style={{marginLeft:'10%',fontFamily:'Anton',fontSize:'2.5vh',color:'white'}}> Trabaja con nosotros,
      trabaja con expertos... </p>
      <Bullet name='Enfoque' message='Ofrecemos'/>
      <Bullet name='Servicios'  message='Diseñamos e instalamos proyectos a la medida, brindamos las soluciones mas inovadoras que requieran nuestros clientes.'/>
      <Bullet name='Productos' message='Importamos, distribuimos y mantenemos el equipo de mas alta calidad.'/>
      <img src={logoViento} alt='Logo inferior'
      style={{position:'absolute', bottom:'6vh', right:'0' ,
      marginRight:'40%',opacity:'60%', width:'40vh', height:'21.35vh'}}/>
      </div>
    </div>
  );
};

export default HomePage;
