import React from "react";
import "./assets/sobreNosotros.css"; 

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros">
      <div className="contenido">
        <img
          src="imagenes/nosotros.png" 
          alt="Comida compartida"
          className="imagen"
          title="sobreNosotros"
        />
        <div className="texto">
          <h2>Sobre nosotros</h2>
          <p>
            En Ko’ten Janal, creemos que los sabores tienen el poder de contar historias, unir
            culturas y acompañarte en cada etapa de tu vida. Todos cambiamos, evolucionamos y dejamos
            cosas atrás, pero hay algo que permanece: el sabor de lo que llevamos con nosotros. Como
            dice el dicho: <strong>“Eres lo que comes”.</strong>
          </p>
          <p>
            ¿Puedes imaginar el sabor? Apuesto a que sí. No necesitas pensarlo mucho antes de elegir tu
            platillo. Ya sea que vengas solo o acompañado, con poca o mucha hambre, en Ko’ten Janal te
            aseguramos que te irás satisfecho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
