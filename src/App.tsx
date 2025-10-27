import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import RightSidebar from "./Components/RightSidebar";
import Descripcion from "./Sections/Descripcion";
import Partes from "./Sections/Componentes";
import DiseñoCinematico from "./Sections/Diseño_cinematico";

// Importa las otras páginas según sea necesario.

const App: React.FC = () => {
// @ts-ignore -- pendiente implementar uso de setTitles
const [titles, setTitles] = useState<string[]>([]);
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/descripcion" element={<Descripcion />} />
            <Route path="/partes" element={<Partes />} />
            <Route path="/diseñocinematico" element={<DiseñoCinematico />} />
            {/* Agrega más rutas aquí */}
            <Route path="*" element={<Navigate to="/descripcion" />} />
          </Routes>
        </div>
        <RightSidebar titles={titles} />
      </div>
    </Router>
  );
};

export default App;
