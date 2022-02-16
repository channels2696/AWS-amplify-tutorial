import React from 'react';

class SlideImage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ArraySource: [this.props.b1,this.props.b2,this.props.b3],
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
      <div style={{backgroundColor:'white', borderStyle:'solid', borderColor: 'white',
    borderTopStyle:'none', borderRadius:'10px'}}>
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
    );
  }
}

export default SlideImage;
