import React from 'react';
import Marcas from './marcas/aires/marcasAires';
import {Link, Outlet } from "react-router-dom";

class Aires extends React.Component {

render(){
  return (
    <div style={{backgroundColor: 'dodgerblue'}}>
     <Marcas/>
     <Outlet/>
   </div>
  );
 }
}

export default Aires;
