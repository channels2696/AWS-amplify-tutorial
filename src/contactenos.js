import React, {useState, useEffect} from 'react';
import {API} from 'aws-amplify';
import {listTodos} from './graphql/queries';
import { createTodo as createTodoMutation, deleteTodo as deleteTodoMutation } from './graphql/mutations';


const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '5vh',
}
const pStyle = {
  color: 'white',
  fontFamily:'droid sans',
  marginBottom:'0',
  fontSize:'2.5vh'
}

const inputStyle ={
  width: '35vh',
  height: '5vh',
  fontFamily: 'droid sans',
  fontSize:'1.8vh',
}

const initialFormState = { nombre: '', apellido: '', correo: '', numero: 0,
interes: '', comentario: ''}

const initalSizes = {inputWidth: '', inputHeight: '', hFontSize: '', pFontSize: ''}

export default function Contactenos() {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [sizes, setSizes] = useState(initalSizes);

  useEffect(() => {
    if (window.innerWidth > 700){
      setSizes({ ...sizes, 'hFontSize': '3vh', 'pFontSize': '2.5vh', 'inputWidth': '35vh'});
    } else {
      setSizes({ ...sizes, 'hFontSize': '2vh', 'pFontSize': '1.8vh', 'inputWidth': '20vh'});
    };
  }, []);

  function checkNull(){
    if (!formData.nombre || !formData.apellido || !formData.interes || formData.numero === 0 || !formData.correo){
      return true;
    } else{
      return false;
    };
  }

  async function createForm(){
    if (checkNull()) {
      alert("Porfavor llene todos los campos");
      return;
    };
    await API.graphql({query: createTodoMutation, variables: { input: formData} });
    setTodos([...todos, formData]);
    setFormData([initialFormState]);
    alert("Gracias! Nos pondremos en contacto enseguida");
  }

  return (
    <div style={{backgroundColor:'dodgerblue',height:'86vh'}}>
      <h2 style={{color:'white',fontFamily:'Droid Sans', textAlign:'center',
    fontSize: sizes.hFontSize}}>
      Interesado? Contáctanos ya!</h2>
      <div style={{...divStyle}}>
        <div style={{marginRight:'5vh'}}>
          <p style={{...pStyle, fontSize: sizes.pFontSize}}> Nombre </p>
          <input style={{...inputStyle, width: sizes.inputWidth}}
          onChange={e => setFormData({ ...formData, 'nombre': e.target.value})}
          value={formData.nombre}/>
        </div>
        <div>
          <p style={{...pStyle ,fontSize: sizes.pFontSize}}> Apellido </p>
          <input style={{...inputStyle, width: sizes.inputWidth}}
          onChange={e => setFormData({ ...formData, 'apellido': e.target.value})}
          value={formData.apellido}/>
        </div>
      </div>
      <div style={{...divStyle}}>
        <div style={{marginRight:'5vh'}}>
          <p style={{...pStyle, fontSize: sizes.pFontSize}}> Correo Electrónico </p>
          <input style={{...inputStyle, width: sizes.inputWidth}}
          onChange={e => setFormData({ ...formData, 'correo': e.target.value})}
          value={formData.correo}/>
        </div>
        <div>
          <p style={{...pStyle, fontSize: sizes.pFontSize}}> Numero Telefónico</p>
          <input style={{...inputStyle, width: sizes.inputWidth}}
          onChange={e => setFormData({ ...formData, 'numero': e.target.value})}
          value={formData.numero}/>
        </div>
      </div>
      <p style={{...pStyle,textAlign:'center', fontSize: sizes.pFontSize}}>Interés:</p>
      <div style={{...divStyle}}>
        <select name='interes' id='interes' style={{...inputStyle}}
        onChange={e => setFormData({ ...formData, 'interes': e.target.value})}
        value={formData.interes}>
          <option value=''/>
          <option value='solar residencial'>Productos Solares Residenciales</option>
          <option value='aire residencial'>Aires Acondicionados Residenciales</option>
          <option value='solar comercial'>Soluciones Solares Comerciales e Industriales</option>
          <option value='aire comercial'>Soluciones de Climatizacíon Comerciales e Industriales</option>
        </select>
     </div>
     <p style={{...pStyle,textAlign:'center', fontSize: sizes.pFontSize}}>Comentario:</p>
     <div style={{...divStyle}}>
       <input style={{...inputStyle, width:'60vh'}}
       onChange={e => setFormData({ ...formData, 'comentario': e.target.value})}
       value={formData.comentario}/>
     </div>
     <div style={{...divStyle}}>
       <button style={{...inputStyle,borderRadius: '5px'}}
        onClick={() => createForm()}>Subir</button>
     </div>
    </div>
  );
}
