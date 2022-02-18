import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import AppHeader from './AppHeader';
import Productos from './productos';
import Contactenos from './contactenos';
import Home from './home';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import WebFont from 'webfontloader';
import Climatizacion from './climatizacion';
import Solar from './solar';


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
          <Route path="productos" element={<Productos />} />
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
