import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import React from "react";
import "./assets/Restaurante.css";
import Ofertas from "./Ofertas";
import Reservacion from "./Reservacion";
import Menu from "./Menu";
import Eventos from "./Eventos";
import Galeria from "./galeria";
import SobreNosotros from './sobreNosotros';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import Footer from './Footer';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container-md">
        <img className="logo" src="imagenes/logo_2.png" alt="Logo Ko'ten Janal" title="logo" />
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#menu">Menú</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reservaciones">Reservaciones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Inicio: React.FC = () => {
  return (
    <div className="fondo">
      <section className="Inicio col-6">
        <h1 className="Bienvenida">Bienvenido a Ko'ten Janal</h1>
        <p className="descripcion">
          La historia mexicana se cuenta de muchas formas, y una de las más auténticas es a través de su comida. Cada platillo es una obra maestra que representa el esfuerzo, la pasión y la alegría de ser mexicano. 
        </p>
      </section>
    </div>
  );
};

const Restaurante: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Inicio />
      <section className="ofertas">
        <h2>Ofertas</h2>
        <Ofertas />
      </section>
      <section className="menu">
        <h2>Menu</h2>
        <Menu />
      </section>
      <section className="reservacion">
      <h2><u>Reservacion</u></h2>
      <Reservacion />
      </section>
      <section className="eventos">
      <Eventos />
      </section>
      <section className="galeria">
      <Galeria />
      </section>
      <section className="sobreNosotros">
      <SobreNosotros />
      </section>
      <section className="PreguntasFrecuentes">
      <PreguntasFrecuentes />
      </section>
      <section className="Footer">
      <Footer />
      </section>
    </div>
  );
};
export default Restaurante;