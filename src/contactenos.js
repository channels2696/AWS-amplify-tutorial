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

export default function Contactenos() {
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
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
    fontSize:'3vh'}}>
      Interesado? Contáctanos ya!</h2>
      <div style={{...divStyle}}>
        <div style={{marginRight:'5vh'}}>
          <p style={{...pStyle}}> Nombre </p>
          <input style={{...inputStyle}}
          onChange={e => setFormData({ ...formData, 'nombre': e.target.value})}
          value={formData.nombre}/>
        </div>
        <div>
          <p style={{...pStyle}}> Apellido </p>
          <input style={{...inputStyle}}
          onChange={e => setFormData({ ...formData, 'apellido': e.target.value})}
          value={formData.apellido}/>
        </div>
      </div>
      <div style={{...divStyle}}>
        <div style={{marginRight:'5vh'}}>
          <p style={{...pStyle}}> Correo Electrónico </p>
          <input style={{...inputStyle}}
          onChange={e => setFormData({ ...formData, 'correo': e.target.value})}
          value={formData.correo}/>
        </div>
        <div>
          <p style={{...pStyle}}> Numero Telefónico</p>
          <input style={{...inputStyle}}
          onChange={e => setFormData({ ...formData, 'numero': e.target.value})}
          value={formData.numero}/>
        </div>
      </div>
      <p style={{...pStyle,textAlign:'center'}}>Interés:</p>
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
     <p style={{...pStyle,textAlign:'center'}}>Comentario:</p>
     <div style={{...divStyle}}>
       <input style={{...inputStyle, width:'70vh'}}
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
