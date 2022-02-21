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
import LGd1 from './productos/marcas/aires/LG/dualLG/dual1';
import LGd2 from './productos/marcas/aires/LG/dualLG/dual2';
import LGd3 from './productos/marcas/aires/LG/dualLG/dual3';
import LGa1 from './productos/marcas/aires/LG/artcool/artcool1';
import LGa2 from './productos/marcas/aires/LG/artcool/artcool2';
import LGa3 from './productos/marcas/aires/LG/artcool/artcool3';
import LG3 from './productos/marcas/aires/LG/portatil/portatil';
import Ecox1 from './productos/marcas/aires/Ecox/ecox1';
import Ecox2 from './productos/marcas/aires/Ecox/ecox2';
import Ecox3 from './productos/marcas/aires/Ecox/ecox3';
import Samsung1 from './productos/marcas/aires/Samsung/samsung1';
import Samsung2 from './productos/marcas/aires/Samsung/samsung2';
import Samsung3 from './productos/marcas/aires/Samsung/samsung3';



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
              <Route path="dualLG1" element={<LGd1/>}/>
              <Route path="dualLGd2" element={<LGd2/>}/>
              <Route path="dualLGd3" element={<LGd3/>}/>
              <Route path="artcool1" element={<LGa1/>}/>
              <Route path="artcool2" element={<LGa2/>}/>
              <Route path="artcool3" element={<LGa3/>}/>
              <Route path="portatil" element={<LG3/>}/>
              <Route path="ecox1" element={<Ecox1/>}/>
              <Route path="ecox2" element={<Ecox2/>}/>
              <Route path="ecox3" element={<Ecox3/>}/>
              <Route path="samsung1" element={<Samsung1/>}/>
              <Route path="samsung2" element={<Samsung2/>}/>
              <Route path="samsung3" element={<Samsung3/>}/>
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
