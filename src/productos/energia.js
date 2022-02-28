import React, {useState, useEffect} from 'react';
import solar from './casasolar.png';

const pStyle={
  fontFamily: 'droid sans',
  color: 'black',
}

const parStyle={
  fontFamily: 'droid sans',
  color: 'white',
}

const initalSizes = { hFontSize: '', pFontSize: ''};

export default function Energia() {
  const [sizes, setSizes] = useState(initalSizes);

  useEffect(() => {
    if (window.innerWidth > 700){
      setSizes({ ...sizes, 'hFontSize': '3.5vh', 'pFontSize': '2vh'});
    } else {
      setSizes({ ...sizes, 'hFontSize': '1.8vh', 'pFontSize': '1.4vh'});
    };
  });


return (
  <div style={{backgroundColor: 'dodgerblue', height:'100vh'}}>
   <img src={solar} style={{width:'55%', float:'left'}} />
    <h1 style={{...pStyle, fontSize: sizes.hFontSize}}> Contáctanos para brindarte una solución que baje tu factura eléctrica!!
     <p style={{...parStyle, fontSize: sizes.pFontSize}}> Si tu factura es mas de <span style={{color:'black'}}>L. 3,205</span> te vamos a brindar una solución altamente efectiva.
       <br/><br/> Por ejemplo, si consumes <span style={{color:'black'}}>L. 3,205</span>, te vas a ahorrar hasta <span style={{color:'black'}}>L. 2,190</span> mensuales. Entre mas alta tu factura,
       mas grande tu ahorro. <br/><br/> Contactános para mas información y cotizar ya! <br/><br/> Distribuimos equipo de alta calidad de
       empresas reconocidas mundialmente. <br/><br/> Envío e instalación gratis! <br/><br/> Podras supervisar desde tu movíl o sitio web.
       <br/><br/> Te ayudaremos con soporte técnico cada vez que lo necesites!
     </p>
     </h1>
  </div>
  );
 }
