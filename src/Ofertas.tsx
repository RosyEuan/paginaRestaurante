import { useState } from "react";
import "./assets/imgOfertas.css"; //estilos de la galería

const images = [
  { id: 1, src: "imagenes/promoo1.webp", alt: "Oferta 1" },
  { id: 2, src: "imagenes/promoo2.webp", alt: "Oferta 2" },
  { id: 3, src: "imagenes/promoo3.webp", alt: "Oferta 3" },
];

const Ofertas: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="oferta-container">
      {images.map((image) => (
        <div
          key={image.id}
          className={`oferta-item ${activeId === image.id ? "active" : activeId !== null ? "inactive" : ""}`}
          onMouseEnter={() => setActiveId(image.id)}
          onMouseLeave={() => setActiveId(null)}
        >
          <img src={image.src} alt={image.alt} className="oferta-img" title="ofertas"/>
        </div>
      ))}
    </div>
  );
};

export default Ofertas;
