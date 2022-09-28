import { useState } from "react";

export default function App(){

  const[formValue, setFormValue] = useState({});

  const handleInputChange = (e)=>{
    const {name, value} = e.target;
    console.log("*** handleInputChange", name, value);
    
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("*** handleSubmit: ",data);
  };

  return(
    <>
      <h1>Joatmon</h1>
      <h2>Contador de String</h2>

      <form onSubmit={handleSubmit}>
          <input type="text" name="input" placeholder="input" onChange={handleInputChange}/>
          <button type="submit">Enviar</button>
      </form>
    </>
  );

}