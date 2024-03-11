import React from 'react'

function Contacto() {
  return (
    <div>
    <h2 style={{ textAlign: "center" }}> Contacto</h2>

    <div className="contacto-formulario">
 
   
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
  
        <label>
          Apellido:
          <input type="text" name="apellido"  />
        </label>
     
        <label>
          Email:
          <input type="email" name="email"  />
        </label>
      
        <label>
          Asunto:
          <textarea name="asunto"  />
        </label>
 
        <button type="submit">Enviar</button>
      </form>
      
    </div>
   
  </div>
  )
}

export default Contacto