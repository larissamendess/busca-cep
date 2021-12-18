import {FiSearch} from 'react-icons/fi';
import './styles.css';
import { useState } from 'react';
import api from './services/api';
import Swal from 'sweetalert2';


function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})
  const Swal = require('sweetalert2')


  async function handleSearch (){
   if(input === '') { 
    Swal.fire({
      title: 'Erro',
      text: 'Por favor, digite algum cep válido.',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
     return;
   }
   
   try{
       const response = await api.get(`${input}/json`);
       setCep(response.data);
       setInput("");
   }
   catch{
    Swal.fire({
      title: 'Erro',
      text: 'Algo deu errado. Verifique o CEP está correto!',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
    setInput("")
   }
  }


  return (
    <div className="container">
    <h1>Buscar CEP </h1>

    <div className="containerInput">
     <input type="text" placeholder="Digite seu CEP"
      value={input} onChange={(e) => setInput(e.target.value) }
     ></input>
    <button className="buttonSearch" onClick={handleSearch}> 
      <FiSearch size={25} color="#fff"/> </button>
    </div>
     

     {Object.keys(cep).length > 0 && (
     <main className="main">

      <h2>{cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>Bairro: {cep.bairro} </span>
      <span>{cep.localidade} - {cep.uf}</span>

    </main>
     )}
    </div>
  );
}

export default App;
