import React from "react";
import "./assets/Footer.css"; 


const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-contenedor">
          {/* Sección de Direcciones y Horarios Juntos */}
          <div className="footer-seccion">
            <h3>Direcciones</h3>
            <p>Blvd. Kukulcan 16, La Isla,</p>
            <p>Zona Hotelera, 77500</p>
            <p>Cancún, Q.R.</p>
  
            <h3>Horarios</h3>
            <p>Lunes - Viernes</p>
            <p>8:00 - 21:00</p>
          </div>
  
          {/* Sección de Contacto */}
          <div className="footer-seccion">
            <h3>Contacto</h3>
            <p>Teléfonos:</p>
            <p>996 745 0789</p>
            <p>994 567 2312</p>
            <p>993 467 4505</p>
            <p>Correo electrónico:</p>
            <p>Kotenjanal@gmail.com</p>
          </div>
  
          {/* Sección de Redes Sociales */}
          <div className="footer-seccion">
          <div className="col-md-3">
            <h3>Redes Sociales</h3>
            <div className="redes-sociales">
              <a href="#"><img className="text-light me-2" src="imagenes/face.svg" alt="facebook" title="facebook"></img></a>
              <a href="#"><img className="text-light insta" src="imagenes/insta.svg" alt="instagram" title="instagram"></img></a>
              <a href="#"><img className="text-light twitter" src="imagenes/twitter.svg" alt="twitter" title="twitter"></img></a>
            </div>
            </div>
          </div>
  
          {/* Sección de Ayuda */}
          <div className="footer-seccion">
            <h3>Ayuda</h3>
            <p>Registro</p>
            <p>Atención al cliente</p>
            <p>Seguridad de usuario</p>
          </div>
        </div>
  
        {/* Derechos reservados */}
        <div className="row mt-4 text-center reservados">
                <div className="col-md-4">
                    <small>&copy; 2024 | Todos los Derechos Reservados</small>
                </div>
                <div className="col-md-4">
                    <a href="#" className="text-light">Aviso de privacidad</a>
                </div>
                <div className="col-md-3 text-end">
                    <a href="#" className="text-light">Términos de uso del sitio web</a>
                </div>
            </div>
      </footer>
    );
  };
  
  export default Footer;