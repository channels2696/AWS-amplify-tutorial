import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import AppHeader from './AppHeader';
import Productos from './routes/productos';
import Empresarial from './routes/empresarial';
import Contactenos from './routes/contactenos';
import Home from './home';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppHeader/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="productos" element={<Productos />} />
          <Route path="empresarial" element={<Empresarial />} />
          <Route path="contactenos" element={<Contactenos />}/>
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
