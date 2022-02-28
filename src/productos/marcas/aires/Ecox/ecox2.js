import React from 'react';
import ECOX from './Ecox';
import {Link, Outlet } from "react-router-dom";
import prueba from './ecox.png'

class Ecox extends React.Component {

render(){
  return (
    <div>
     <ECOX largeImg={prueba} b1="- SEER 18" b2=""
     b3="" b4=""
     smallImg="" pointer={1}/>
    </div>
  );
 }
}

export default Ecox;
