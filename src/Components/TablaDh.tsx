import React from "react";

const DHTable: React.FC = () => {
  const data = [
    {
      eslabon: "1",
      anguloz: "45°",
      distanciaz: "10cm",
      angulox: "90°",
      distanciax: "0cm",
    },
    {
      eslabon: "2",
      anguloz: "30°",
      distanciaz: "0cm",
      angulox: "0°",
      distanciax: "15cm",
    },
    {
      eslabon: "3",
      anguloz: "15°",
      distanciaz: "0cm",
      angulox: "0°",
      distanciax: "10cm",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={headerStyle}>ESLABON</th>
            <th style={headerStyle}>ANGULO EN Z</th>
            <th style={headerStyle}>DISTANCIA EN Z</th>
            <th style={headerStyle}>ANGULO EN X</th>
            <th style={headerStyle}>DISTANCIA EN X</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={cellStyle}>{item.eslabon}</td>
              <td style={cellStyle}>{item.anguloz}</td>
              <td style={cellStyle}>{item.distanciaz}</td>
              <td style={cellStyle}>{item.angulox}</td>
              <td style={cellStyle}>{item.distanciax}</td>
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

export default DHTable;
