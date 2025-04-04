import { useState } from "react";
import "./assets/PreguntasFrecuentes.css";


const PreguntasFrecuentes = () => {
    const [preguntaAbierta, setPreguntaAbierta] = useState(null);
  
    const alternarPregunta = (indice:any) => {
      setPreguntaAbierta((prev) => (prev === indice ? null : indice));
    };
  
    const preguntas = [
      {
        pregunta: "¿Tienen opciones vegetarianas o veganas?",
        respuesta: "¡Sí! Contamos con tacos de nopales, hongos y frijoles negros.",
      },
      {
        pregunta: "¿Qué tipos de tacos ofrecen?",
        respuesta: "Ofrecemos tacos de carnitas, barbacoa, pastor y opciones veganas.",
      },
      {
        pregunta: "¿Puedo personalizar mis tacos con diferentes complementos?",
        respuesta: "Sí, puedes agregar o quitar ingredientes según tu preferencia.",
      },
      {
        pregunta: "¿Es necesario hacer reservación?",
        respuesta: "No es obligatorio, pero recomendamos reservar para grandes grupos.",
      },
      {
        pregunta: "¿Puedo celebrar un evento privado en su restaurante?",
        respuesta: "Sí, contamos con un área especial para eventos privados.",
      },
    ];
  
    return (
      <div className="contenedor-preguntas">
         <div className="imagen">
        <img className="jaguar" src="imagenes/jaguar.webp" alt="imagen de jaguar" title="preguntasFrecuentes"></img>
        <h2 className="titulo"><u>Preguntas Frecuentes</u></h2>
        </div>
        <div className="preguntas">
        {preguntas.map((item, i) => (
  <div key={i} className="pregunta">
    <button className="boton-pregunta" onClick={() => alternarPregunta(i)}>
      {item.pregunta}
      <span className="icono">{preguntaAbierta === i ? "−" : "+"}</span>
    </button>
    <div className={`respuesta ${preguntaAbierta === i ? "mostrar" : ""}`}>
      <p>{item.respuesta}</p>
    </div>
  </div>
))}
        </div>
      </div>
    );
  };
  
  export default PreguntasFrecuentes;