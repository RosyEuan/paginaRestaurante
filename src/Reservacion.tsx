import React from "react";
import "./assets/reserva.css"; 



const Reservacion = () => {
  return (
    <div className="reservacion-container">
      <div className="imagen-container">
      <div className="descripcion-reserva">
        <p>Esperamos tu visita con gran ilusión, no dudes en reservar.</p>
      </div>
        <img src="imagenes/reservas.png" alt="Mesa reservada" className="imagen-reserva" title="Reservacion"/>
      </div>
      <div className="formulario-container">
        <h3 className="titulo-formulario">Llena el formulario</h3>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>Nombre:</label>
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <label>Apellido:</label>
              <input type="text" placeholder="Apellido" />
            </div>
            <div className="form-group">
              <label>Teléfono:</label>
             <input type="tel" placeholder="10 dígitos" />
            </div>
            <div className="form-group">
              <label>Correo:</label>
              <input type="email" placeholder="correo" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Fecha:</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Hora:</label>
              <input type="time" />
            </div>
            <div className="form-group">
              <label>Mesa:</label>
              <select>
                <option>1-A</option>
                <option>1-B</option>
                <option>2-A</option>
              </select>
            </div>
            <div className="form-group">
              <label>Comensales:</label>
              <select>
                <option>1 comensal</option>
                <option>2 comensales</option>
                <option>3 comensales</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Comentario (opcional):</label>
            <textarea placeholder="Comentario opcional"></textarea>
          </div>

          <button type="submit" className="boton-reservar">RESERVAR</button>
        </form>
      </div>
    </div>
  );
};

export default Reservacion;
