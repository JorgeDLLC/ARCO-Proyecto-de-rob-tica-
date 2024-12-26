import "./Descripcion.css";
import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";
import BRI from "../Image/BRI.png";
const Descripcion: React.FC = () => {
  const titles = [{ id: "Descripcion", text: "Descripcion" }];
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        id="Descripcion"
        style={{ marginLeft: "250px", padding: "20px", width: "100%" }}
      >
        <h2>Descripción</h2>
        <section>
          <p>
            Proyecto para programacion y ensamblaje de un brazo robotico
            recolector de objetos transportados mediante una faja
            <span className="Resaltar"> programado en arduino</span>
          </p>
          <div className="Planos">
            <img
              src={BRI}
              alt="Imagen del armado en digital del brazo robotico"
              className="BRI"
            />
          </div>
          <p>
            El proyecto hace uso de un total de dos actuadoresde los cuales uno
            de ellos es el
            <span className="Resaltar"> sensor ultrasónico</span> el cual mide
            la distancia entre el brazo robótico y los objetos en la faja
            transportadora, mientras que el{" "}
            <span className="Resaltar"> sensor de color </span> detecta el color
            de las cajas. Una vez que la faja detecta que un objeto ha llegado a
            una posición predeterminada, el sensor ultrasónico envía la señal
            para detener el movimiento de la faja. En paralelo, los servos del
            brazo robótico se activan para recoger la caja y colocarla en la
            ubicación correspondiente, dependiendo del color detectado.
          </p>
          <p>
            Este sistema busca mejorar la eficiencia en el proceso de
            clasificación de objetos en líneas de producción o almacenaje,
            automatizando tareas repetitivas y eliminando posibles errores
            humanos. A medida que el robot traslada las cajas, se asegura de que
            estas se organicen de forma precisa y ordenada. El proyecto pretende
            lograr una clasificación con un 100% de precisión en cuanto al
            reconocimiento del color y la ubicación correcta de las cajas.
          </p>
        </section>
      </div>
      <RightSidebar titles={titles} />
    </div>
  );
};

export default Descripcion;
