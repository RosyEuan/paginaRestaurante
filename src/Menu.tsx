import React from "react";
import "./assets/menu.css"; 

const menuItems = [
  {
    title: "Platillos",
    description:
      "Ofrecemos una variedad de platillos tradicionales como tacos, enchiladas, mole y pozole. También exploramos fusiones modernas que mantienen la esencia de la cocina mexicana.",
    image: "imagenes/platillo.webp",
  },
  {
    title: "Bebidas",
    description:
      "No solo la comida, sino también las bebidas son esenciales. Servimos opciones tradicionales como aguas frescas, horchata, y una selección de tequilas y mezcales que acompañan perfectamente nuestra oferta gastronómica.",
    image: "imagenes/horchata.webp",
  },
  {
    title: "Postres",
    description:
      "La sección de postres es una celebración de la dulzura y la creatividad de la gastronomía mexicana. Creemos que los postres son el cierre perfecto para una comida, brindando una experiencia que deleita tanto al paladar como a la vista.",
    image: "imagenes/postre.webp",
  },
];

const MenuCard: React.FC<{ item: typeof menuItems[0] }> = ({ item }) => {
  return (

    <div className="menu-card">
      <img src={item.image} alt={item.title} className="menu-image" title="menu"/>
      <div className="menu-content">
        <h3 className="menu-title">{item.title}</h3>
        <p className="menu-description">{item.description}</p>
        <div className="menu-button-container">
          <button className="menu-button">Ver más</button>
        </div>
      </div>
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <section className="menu-container">
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;

