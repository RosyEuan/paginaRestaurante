import "./assets/galeriaimg.css";


const galeria = () => {
  const images = [
    "/imagenes/gale1.png",
    "/imagenes/gale2.png",
    "/imagenes/gale3.png",
    "/imagenes/gale4.png",
    "/imagenes/gale5.png",
    "/imagenes/gale6.png",
  ];

  return (
    <section className="gallery">
      <div className="gallery-text">
        <h2>Galería</h2>
        <p>
          ¿Quieres saber qué te espera? Sumérgete en nuestra galería y descubre
          la combinación perfecta entre tradición, sabor y un espacio diseñado
          para disfrutar.
        </p>
        <p>
          Nuestro restaurante combina lo mejor del diseño contemporáneo con un
          toque tradicional, creando un espacio único para tus comidas.
        </p>
      </div>

      {/* Grid de imágenes */}
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Galería ${index + 1}`} title="galeria"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default galeria;
