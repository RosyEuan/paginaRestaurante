import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import "./assets/reserva.css";
import ReservaModal from "./ReservaModal.tsx";

const Reservacion = () => {
  const [mesas, setMesas] = useState<{ seccion_mesa: string; numero_mesa: number; capacidad: number }[]>([]);
  const [horarios, setHorarios] = useState<string[]>([]);

  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/mesas");
        setMesas(response.data);
      } catch (error) {
        console.error("Error al cargar mesas:", error);
      }
    };
  
    const fetchHorarios = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/horarios");
        setHorarios(response.data.map((h: any) => h.hora)); // ajusta según tu estructura
      } catch (error) {
        console.error("Error al cargar horarios:", error);
      }
    };
  
    fetchMesas();
    fetchHorarios();
  }, []);
  

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    fecha: "",
    hora: "",
    mesa: "",
    comensales: "",
    comentario: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const capacidad = getCapacidadMesaSeleccionada();
    if (capacidad && parseInt(formData.comensales) > capacidad) {
      alert(`La cantidad de comensales excede la capacidad de la mesa seleccionada (${capacidad}).`);
      return;
    }
  
    try {
      const [seccion_mesa, numero_mesa] = formData.mesa.split("-");
  
      const dataParaEnviar = {
        ...formData,
        mesa: `${seccion_mesa.trim()} - ${numero_mesa.trim()}`,
        comensales: parseInt(formData.comensales)
      };
  
      await axios.post("http://localhost:3000/api/reservaciones", dataParaEnviar);
  
      // alert("Reservación exitosa. " + response.data.message);
      setMostrarModal(true);
  
      // 🔁 Limpiar los campos después del envío exitoso
      setFormData({
        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        fecha: "",
        hora: "",
        mesa: "",
        comensales: "",
        comentario: ""
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert("Error al hacer la reservación: " + (error.response?.data?.error || error.message));
      } else {
        alert("Error desconocido al hacer la reservación.");
      }
    }
  };  

  const getCapacidadMesaSeleccionada = () => {
    if (!formData.mesa) return undefined;
  
    const [seccion, numero] = formData.mesa.split("-");
    const mesaEncontrada = mesas.find(
      (mesa) =>
        mesa.seccion_mesa === seccion && mesa.numero_mesa.toString() === numero
    );
  
    return mesaEncontrada?.capacidad || undefined;
  };
  
  const [mostrarModal, setMostrarModal] = useState(false);


  return (
    <>
    {mostrarModal && <ReservaModal onClose={() => setMostrarModal(false)} />}
      <div className="reservacion-container">
        <div className="imagen-container">
          <div className="descripcion-reserva">
            <p>Esperamos tu visita con gran ilusión, no dudes en reservar.</p>
          </div>
          <img src="imagenes/reservas.webp" alt="Mesa reservada" className="imagen-reserva" title="Reservación" />
        </div>
        <div className="formulario-container">
          <h3 className="titulo-formulario">Llena el formulario</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nombre:</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Apellido:</label>
                <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Teléfono:</label>
                <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Correo:</label>
                <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Fecha:</label>
                <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} />
              </div>


              <div className="form-group">
                <label>Hora:</label>
                <select name="hora" value={formData.hora} onChange={handleChange}>
                  <option value="">Selecciona una hora</option>
                  {horarios.map((hora, index) => (
                    <option key={index} value={hora}>{hora}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Mesa:</label>
                <select name="mesa" value={formData.mesa} onChange={handleChange}>
                  <option value="">Selecciona una mesa</option>
                  {mesas.map((mesa, index) => (
                    <option key={index} value={`${mesa.seccion_mesa}-${mesa.numero_mesa}`}>
                      Mesa {mesa.seccion_mesa}-{mesa.numero_mesa} (Capacidad: {mesa.capacidad})
                    </option>
                  ))}
                </select>
              </div>


              <div className="form-group">
                <label>Comensales:</label>
                <input
                  type="number"
                  name="comensales"
                  value={formData.comensales}
                  onChange={handleChange}
                  min={1}
                  max={getCapacidadMesaSeleccionada()}
                  placeholder="Número de comensales"
                  disabled={!formData.mesa}
                />
                {/* {formData.mesa && (
                  <small style={{ color: "#555" }}>
                    Capacidad máxima: {getCapacidadMesaSeleccionada()} comensales
                  </small>
                )} */}
              </div>

            </div>

            <div className="form-group">
              <label>Comentario (opcional):</label>
              <textarea name="comentario" value={formData.comentario} onChange={handleChange} />
            </div>

            <button type="submit" className="boton-reservar">RESERVAR</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reservacion;