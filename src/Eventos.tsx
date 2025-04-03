import React from "react";
import "./assets/Eventos.css";

const Eventos: React.FC = () => {
  return (
    <section className="eventos">
        <div>
            <h2 className="titulo-evento"><u>Eventos y Avisos</u></h2>
        </div>
        <div className="imagen-evento">
        <img className="Evento" src="imagenes/eventoos.png" alt="Logo Ko'ten Janal" title="eventos" />
        </div>
      
       <div className="tradicional">
        <p>Tradicionalmente celebramos en Ko’ten Janal...</p>
        </div>
        <div className="evento-contenido">
        <p>
          Un ambiente acogedor y festivo, donde cada evento se convierte en una
          experiencia inolvidable. Además, contamos con opciones personalizadas
          para menús y decoraciones que reflejan la esencia de tu celebración.
        </p>
        <p>
          Momentos únicos que reúnen a amigos y seres queridos en torno a la
          deliciosa y colorida comida mexicana. Nuestro restaurante es el
          espacio perfecto para celebrar cualquier evento.
        </p>
      </div>
    </section>
  );
};

export default Eventos;
