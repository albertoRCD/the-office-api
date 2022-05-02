import React, { useState, useEffect } from "react"
import {Item} from "./Item"



function App() {

  const [count, setCount] = useState(1)
  const [input, setInput] = useState("")

  function handleChange(event){
    setInput(event.target.value)
  }

  function submitSearch(event){
    
      fetch(`https://the-office.p.rapidapi.com/${input}`, options)
      .then(response => response.json())
      .then(data => setDatos(data))
    event.preventDefault();
    setInput("")

  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'the-office.p.rapidapi.com',
      'X-RapidAPI-Key': '80d178cd82msh5fc3cc2c651a05fp10f8d8jsncddfd54f4b9b'
    }
  };
  
  const url = (`https://the-office.p.rapidapi.com/${count}`)

  const [datos, setDatos] = useState([])

    useEffect( () => {
        fetch(url, options)
        .then(response => response.json())
        .then(data => setDatos(data))
    }, [url])
  
  
  return (

    <div>
    <div className="grad">
      <h1> Personajes de `The Office` </h1>
    </div>
    <Item 
    id={datos.id}
    name={datos.name}
    realname={datos.realname}
    seasons={datos.seasons}
    />
    <div className="container">
    <button
       className="button btn btn-secondary d-grid"
       onClick={ () => setCount(count - 1)}> Atrás</button>
      <button
       className="button btn btn-secondary"
       onClick={ () => setCount(count + 1)}> Siguiente </button>
       </div>
       <div class="input-group mb-3">
    <input type="text" class="form" placeholder="Ir al nº..." 
    aria-label="Recipient's username" aria-describedby="button-addon2"
      name="search" onChange={handleChange} value={input}/>
    <button class="btn btn-outline-secondary"
     type="button" id="button-addon2"
     onClick={submitSearch}>Search</button>
      </div>
    </div>
  );
}

export default App;
