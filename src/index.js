import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import AppHeader from './home/AppHeader';
import Productos from './productos/productos';
import Contactenos from './contactenos';
import Home from './home/home';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import WebFont from 'webfontloader';
import Climatizacion from './empresarial/climatizacion';
import Solar from './empresarial/solar';
import Aires from './productos/aires';
import Energia from './productos/energia';
import Instaladores from './productos/instaladores';
import LG from './productos/marcas/aires/LG';
import Ecox from './productos/marcas/aires/Ecox';
import Samsung from './productos/marcas/aires/Samsung';


WebFont.load({
    google: {
      families:['Anton','Droid Sans']
    }
  });

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className='main'
          style={{height:'100vh'}}>
                                <AppHeader/>
                                <Home/>
                                </div>}/>
        <Route path="/nav" element={<AppHeader/>}>
          <Route path="productos" element={<Productos />}>
            <Route path="Aires" element={<Aires/>}>
              <Route path="LG" element={<LG/>}/>
              <Route path="Ecox" element={<Ecox/>}/>
              <Route path="Samsung" element={<Samsung/>}/>
            </Route>
            <Route path="Energia" element={<Energia/>}/>
            <Route path="Instaladores" element={<Instaladores/>}/>
          </Route>
          <Route path="empresarial" element={<Climatizacion />}/>
          <Route path="contactenos" element={<Contactenos />}/>
          <Route path="Solar" element={<Solar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
