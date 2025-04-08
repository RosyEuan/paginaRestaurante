import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./assets/modalre.css"; 


interface ReservaModal {
  onClose: () => void;
}

const ReservaModal: React.FC<ReservaModal> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        {/* <h2 className="modal-titulo">Tu reserva está confirmada</h2> */}
        <div className="check-icon">✓</div>
        <p className="modal-mensaje">Tu reserva está confirmada</p>
        <p className="modal-mensaje">
          Se le enviarán los detalles de su reserva a su correo electrónico para su referencia.
        </p>
        <button className="exit-button" onClick={onClose}>Salir</button>
      </div>
    </div>
  );
};

export default ReservaModal;
