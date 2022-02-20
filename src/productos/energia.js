import React from 'react';

const pStyle={
  fontFamily: 'droid sans',
  color: 'white',
}


class Energia extends React.Component {

render(){
  return (
  <div style={{backgroundColor: 'dodgerblue', height:'90vh'}}>
   <div style={{textAlign:'center', marginTop:'50vh'}}>
    <h1 style={{...pStyle}}> En construcción. Visítanos pronto!! </h1>
   </div>
  </div>
  );
 }
}

export default Energia;
