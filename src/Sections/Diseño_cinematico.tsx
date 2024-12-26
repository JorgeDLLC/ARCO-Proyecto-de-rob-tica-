import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";
import Card from "../Components/Cards";
const DiseñoCinematico: React.FC = () => {
  const titles = [{ id: "Parametros", text: "Parámetros del Brazo Robótico" }];
  return (
    <section id="diseñocinematico">
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
          <h2>Diseño Cinemático</h2>
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
            paragraph=""
          />
          <Card
            id="Longitudes"
            title="Longitudes de los eslabones:"
            paragraph=""
          />
          <Card id="Sistema" title="Sistema de coordenadas:" paragraph="" />
        </div>
        <RightSidebar titles={titles} />
      </div>
    </section>
  );
};

export default DiseñoCinematico;
