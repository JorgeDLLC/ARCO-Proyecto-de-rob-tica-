import "./Componentes.css";
import Sidebar from "../Components/Sidebar";
import Tabla from "../Components/TablaComponentes";
import SensorColor from "../Image/SensorColor.png";
import Ultrasonico from "../Image/Ultrasonico.png";
import Motor from "../Image/Motor.png";
import Servo from "../Image/servo.png";
import Driver from "../Image/driver.png";
import Card from "../Components/Cards";
import RightSidebar from "../Components/RightSidebar";
const Partes: React.FC = () => {
  const titles = [
    { id: "Microcontrolador", text: "Microcontrolador" },
    { id: "Drivers", text: "Drivers" },
    { id: "Ultrasónico HC-SR04", text: "Ultrasónico HC-SR04" },
    { id: "Sensor de color HW531", text: "Sensor de color HW531" },
    {
      id: "Motor de corriente continua (CC)",
      text: "Motor de corriente continua (CC)",
    },
    { id: "Servo SG90-P", text: "Servo SG90-P" },
  ];
  return (
    <section id="partes">
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
          <h2>Componentes para el proyecto</h2>
          <p>
            En la siguiente table se pueden areciar los modelos tanto de
            sensores como actuadores que se utilizaron en este proyecto, se
            puede apreciar la intensidad de corriente maxima, la cual esta en
            amperios y miliamperios, y el tipo que puede ser Analogico{" "}
            <span className="Resaltar"> A </span>o Digital
            <span className="Resaltar"> D </span>
          </p>
          <Tabla />
          <Card
            id="Microcontrolador"
            title="Microcontrolador"
            paragraph="Para poder realizar los movimiento utilizaremos un Arduino UNO el
            cual será el encargado de procesar la información obtenida tanto por
            el sensor ultrasónico como por el sensor de color además de tener
            almacenadas las acciones de cada uno de los servos y el motor en
            cuanto se den las condiciones establecidas"
          />
          <Card
            id="Drivers"
            title="Drivers"
            paragraph="Utilizaremos un driver para poder
            ahorrar conexiones en el Arduino el cual sera el PCA9685, ya que la cantidad de cables para el proyecto puede hacer que sea difícil de establecer un orden y
            esto entorpecería el desarrollo del proyecto, como los servos
            trabajan hasta 5 voltios esta será la fuente que utilizares la cual
            será proporcionada por una power bank
            Enlace de compra: "
            imageUrl={Driver}
          />
          <h2>Sensores</h2>
          <Card
            id="Ultrasónico HC-SR04"
            title="Ultrasónico HC-SR04"
            paragraph="Este sensor se utiliza para medir la
            distancia entre el robot y los objetos sobre la faja transportadora.
            Su rango de funcionamiento es de 2 cm a 400 cm, y tiene un consumo
            de corriente de 15 mA a una tensión de 5V. Su función principal es
            detectar la proximidad de los objetos, deteniendo la faja cuando un
            objeto se encuentra a menos de 5 cm, permitiendo su posterior
            análisis."
            imageUrl={Ultrasonico}
          />
          <Card
            id="Sensor de color HW531"
            title="Sensor de color HW531"
            paragraph="Este sensor es el encargado de detectar el
            color de los objetos que se transportan sobre la faja. Tiene un
            consumo de corriente de 60 mA y puede funcionar con una tensión de
            entre 3.3V y 5V. El sensor proporciona información sobre el color de
            los objetos, que será utilizada para clasificar las pelotas de golf
            en su respectiva caja."
            imageUrl={SensorColor}
          />
          <h2>Actuadores</h2>
          <Card
            id="Motor de corriente continua (CC)"
            title="Motor de corriente continua (CC)"
            paragraph="El motor CC se utiliza para
            impulsar la faja transportadora. Este motor funciona en un rango de
            6V a 12V, con un consumo máximo de corriente de 1.5 A y una potencia
            de 18 W. El motor permitirá el movimiento continuo de los objetos a
            lo largo de la faja y su detención automática al recibir la señal
            del sensor ultrasónico"
            imageUrl={Motor}
          />
          <Card
            id="Servo SG90-P"
            title="Servo SG90-P"
            paragraph="Este servomotor es utilizado para mover las
            articulaciones del brazo robótico, que tiene la tarea de recoger y
            colocar las cajas según el color detectado. El SG90-P tiene un
            ángulo de rotación de 180° y un consumo máximo de 500 mA. Su
            potencia máxima es de 2.5 W y se controla mediante señales PWM
            (modulación por ancho de pulso)"
            imageUrl={Servo}
          />
        </div>
        <RightSidebar titles={titles} />
      </div>
    </section>
  );
};

export default Partes;
