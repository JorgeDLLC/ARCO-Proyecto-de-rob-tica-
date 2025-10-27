import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";
import Card from "../Components/Cards";
import TablaDH from "../Components/TablaDh";
const DiseñoCinematico: React.FC = () => {
  const titles = [
    { id: "Parametros", text: "Parámetros del Brazo Robótico" },
    { id: "Articulaciones", text: "Angulos de las articulaciones" },
    { id: "Longitudes", text: "Longitudes entre eslabones" },
    { id: "Sistema", text: "Sistema de coordenadas" },
    { id: "Dh", text: "Tabla de parámetros DH" },
  ];
  return (
    <section id="diseñocinematico">
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
          <h3>Diseño Cinemático</h3>
          <p>
            La cinemática del brazo robótico se refiere al estudio del
            movimiento del brazo, teniendo en cuenta la rotación y la traslación
            de sus eslabones. Para modelar este movimiento, se definen los
            ángulos de las articulaciones y las longitudes de los eslabones, que
            determinan la posición del efector final en el espacio.
          </p>
          <h3 id="Parametros">Parámetros del Brazo Robótico</h3>
          <p>
            El brazo robótico está compuesto por tres articulaciones y tres
            eslabones, lo que proporciona tres grados de libertad. Los
            parámetros relevantes son:
          </p>
          <Card
            id="Articulaciones"
            title="Ángulos de las articulaciones:"
            paragraph="q1: Ángulo respecto al eje horizontal (base del brazo).
            q2: Ángulo respecto al primer eslabón.
            q3: Ángulo respecto al segundo eslabón"
          />
          <Card
            id="Longitudes"
            title="Longitud entre eslabones:"
            paragraph="L1: Longitud del primer eslabón.
            L2: Longitud del segundo eslabón.
            L3: Longitud del tercer eslabón (distancia del efector final desde la base)."
          />
          <Card
            id="Sistema"
            title="Sistema de coordenadas:"
            paragraph="El origen de coordenadas se coloca en el punto de la base del brazo robótico, en (0,0) (0, 0) (0,0), y el movimiento del brazo se realiza en el plano XY."
          />
          <h3>Establecimiento de los datos para el Brazo Robótico</h3>
          <p>
            Longitudes de los Eslabones (en cm):<br></br>
            L1 = 10 cm (Desde la base hasta la primera articulación)<br></br>
            L2 = 15 cm (Longitud del segundo eslabón)<br></br>
            L3 = 10 cm (Longitud del tercer eslabón)<br></br>
            Ángulos de las Articulaciones (en grados):<br></br>
            q1 = 45° (Ángulo de rotación alrededor del eje z0) <br></br>
            q2 = 30° (Ángulo de rotación alrededor del eje z1)<br></br>
            q3 = 15° (Ángulo de rotación alrededor del eje z2)<br></br>
          </p>
          <h3 id="Dh">Tabla de parámetros DH:</h3>
          <TablaDH />
        </div>
        <RightSidebar titles={titles} />
      </div>
    </section>
  );
};

export default DiseñoCinematico;
