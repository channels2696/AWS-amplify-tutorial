import React from 'react';
import Empresarial from './empresarial';

const msjSolar = "Hemos realizado proyectos de mas de 350KW en zonas industriales y realizado estudios de decenas de Megavatios. Ahorrandole a nuestros clientes millones de lempiras anualmente. Ponte en contacto para ver como te podemos ayudar!"
const estadoSolar = "Proyectos Solares"
const msjGeneral =  "Con varios años de experiencia en proyectos comerciales e industriales, puede contar con nosotros en entregarle proyectos de la mejor calidad del mercado. Cuente con nosotros para darle los mejores servicios de diseño, importación, instalación, supervisión, y hasta financiamiento."

const largeImg = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/solpr1.png"
const smallImg = "https://awswebsitereycaimgs171114-staging.s3.us-east-2.amazonaws.com/public/smallSolpr.jpg"


class Solar extends React.Component {

render(){
  return (
    <div style={{backgroundColor: 'dodgerblue', height:'90vh'}}>
      <Empresarial largeImg={largeImg} SmallImg={smallImg} msjGen={msjGeneral} titulo={estadoSolar} msgEspecifico={msjSolar} />
    </div>
  );
 }
}

export default Solar;
