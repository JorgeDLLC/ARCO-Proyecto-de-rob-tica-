import React from "react";

const ComponentTable: React.FC = () => {
  const data = [
    {
      tipo: "Sensor",
      modelo: "HC SR04",
      rango: "2 cm - 400 cm",
      iMax: "15 mA",
      vNominal: "5V",
      potencia: "0.075W",
      tipoConexion: "D",
      pin: "Trig, Echo",
    },
    {
      tipo: "Sensor",
      modelo: "HW531",
      rango: "Detección de color",
      iMax: "60 mA",
      vNominal: "3.3V - 5V",
      potencia: "0.3W",
      tipoConexion: "D",
      pin: "S0, S1, S2, S3, OUT",
    },
    {
      tipo: "Actuador",
      modelo: "Motor CC",
      rango: "Variable",
      iMax: "1.5 A",
      vNominal: "6V - 12V",
      potencia: "18W",
      tipoConexion: "A",
      pin: "+, -",
    },
    {
      tipo: "Actuador",
      modelo: "SG90-P 180°",
      rango: "500 mA",
      iMax: "500 mA",
      vNominal: "4.8V - 5V",
      potencia: "2.5W",
      tipoConexion: "A",
      pin: "PWM",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={headerStyle}>TIPO</th>
            <th style={headerStyle}>MODELO</th>
            <th style={headerStyle}>RANGO</th>
            <th style={headerStyle}>I MAX</th>
            <th style={headerStyle}>V NOMINAL</th>
            <th style={headerStyle}>POT</th>
            <th style={headerStyle}>TIPO</th>
            <th style={headerStyle}>PIN</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={cellStyle}>{item.tipo}</td>
              <td style={cellStyle}>{item.modelo}</td>
              <td style={cellStyle}>{item.rango}</td>
              <td style={cellStyle}>{item.iMax}</td>
              <td style={cellStyle}>{item.vNominal}</td>
              <td style={cellStyle}>{item.potencia}</td>
              <td style={cellStyle}>{item.tipoConexion}</td>
              <td style={cellStyle}>{item.pin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const headerStyle: React.CSSProperties = {
  border: "1px solid white",
  padding: "8px",
  textAlign: "left",
};

const cellStyle: React.CSSProperties = {
  border: "1px solid white",
  padding: "8px",
};

export default ComponentTable;
