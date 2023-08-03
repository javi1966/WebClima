const ciudad = "Sevilla";
const pais = "ES";
const apikey = "c2ecf0a83c555c2054704fd94ff29f9e";
const URI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`;

let hora = "";
let minu = "";
let seg = "";
let temperatura = "";
let humedad = "";
let presion = "";
let descripcion = "";
let velocidad = "";

const HtmlHora = document.getElementById("idHora");
const Fecha = document.getElementById("idFecha");
const MarText= document.getElementById("marText")

//******************************************************************************************** */
const lanzaToast = (texto) => {
  let x = document.getElementById("toast");

  x.innerHTML = "<h4>" + texto + "</h4>";

  x.className = "show";
  setTimeout(() => {
    x.className = x.className.replace("show", "");
  }, 2000);
};

//*************************************************************************************** */
const getClima = async (ciudad, pais) => {
  console.log(URI);

  try {
    let response = await fetch(URI);

    let data = await response.json();

    console.log("Response: " + data.main.temp);

    return data;
  } catch (error) {
    console.error("Error midiendo de thingspeak Temp. Interior");
  }
};

//************************************************************************************ */

const sleep = (milliseconds) => {
  var start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
};

//**************************************************************************************** */

const degToCompass = (num) => {
  let val = Math.floor(num / 22.5 + 0.5);
  let arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

//********************************************************************************************** */

const gaugeTemperatura = new RadialGauge({
  renderTo: "gauTemp",
  colorValueBoxRectEnd: "#333",
  colorValueBoxRect: "#222",
  valueBoxBorderRadius: 0,
  colorNeedleCircleInnerEnd: "#222",
  colorNeedleCircleInner: "#111",
  colorNeedleCircleOuterEnd: "#111",
  colorNeedleCircleOuter: "#333",
  colorNeedleShadowDown: "#333",
  colorBorderInnerEnd: "#333",
  colorBorderInner: "#111",
  colorBorderMiddleEnd: "#111",
  colorBorderMiddle: "#222",
  colorBorderOuterEnd: "#111",
  colorBorderOuter: "#333",
  animationRule: "bounce",
  animationDuration: 1200,
  needleCircleInner: false,
  needleCircleOuter: true,
  needleCircleSize: 7,
  needleWidth: 2,
  needleType: "arrow",
  borders: true,
  borderShadowWidth: 0,
  colorPlate: "#222",
  colorNumbers: "#eee",
  colorUnits: "#ccc",
  colorTitle: "#eee",
  colorMinorTicks: "#ddd",
  colorMajorTicks: "#ddd",

  highlights: [
    {
      from: -10,
      to: 10,
      color: "rgba(0,0, 255, .3)",
    },
    {
      from: 10,
      to: 30,
      color: "rgba(0,255, 0, .8)",
    },
    {
      from: 30,
      to: 40,
      color: "rgba(255,0, 0, .7)",
    },
    {
      from: 40,
      to: 60,
      color: "rgba(255,255, 51, .8)",
    },
  ],
  valueInt: 2,
  valueDec: 1,
  strokeTicks: true,
  minorTicks: 2,
  majorTicks: [-10, 0, 10, 20, 30, 40, 50, 60],
  maxValue: 60,
  minValue: -10,
  title: "Temperatura",
  units: "°C",
  height: 250,
  width: 250,
}).draw();

const gaugeHumedad = new RadialGauge({
  renderTo: "gauHum",
}).draw();

const gaugePresion = new RadialGauge({
  renderTo: "gauPres",
}).draw();

const gaugeVeloc = new RadialGauge({
  renderTo: "gauVeloc",
}).draw();

//*********************************************************************************** */

const reloj = () => {
  console.log("Refrescando Reloj...");

  let Hora = new Date();
  let strHora = "";

  hora = Hora.getHours();
  minu = Hora.getMinutes();
  seg = Hora.getSeconds();

  minu = minu > 9 ? minu : "0" + minu;
  strHora = hora + ":" + minu;

  console.log(`Reloj ${strHora}`);

  HtmlHora.firstChild.textContent = hora;
  HtmlHora.lastChild.textContent = minu;

  Fecha.innerHTML = Hora.toLocaleDateString("es");
};

//******************************************************************************* */

const medida = async () => {

  lanzaToast("Refrescando...");
  console.log("Refrescando Medida...");

  try {
    const res = await fetch(URI);

    const data = await res.json();
    console.log("dato: " + data);

    console.log(
      `Temperatura :${data.main.temp} ºC,Humedad: ${data.main.humidity} %Hr,Presion: ${data.main.pressure} Kpa,${data.weather[0].description}`
    );
    console.log(`Estado: ${data.weather[0].description}`);

    console.log("Direccion viento: " + degToCompass(data.wind.deg));

    const dir = degToCompass(data.wind.deg);
    let txtDir = "";
    txtDir =
      dir === undefined
        ? (txtDir = "")
        : (txtDir = `,Dir. Viento ${data.wind.deg}º,${dir}`);

     MarText.innerText=`Temperatura :${data.main.temp} ºC,Humedad: ${data.main.humidity} %Hr,Presion: ${data.main.pressure} Kpa` + txtDir
    

     //GAUGES
     gaugeTemperatura.value = data.main.temp;
     document.getElementById("gauTempMin").setAttribute("data-value",data.main.temp_min)
     document.getElementById("gauTempMax").setAttribute("data-value",data.main.temp_max)
     document.getElementById("gauHum").setAttribute("data-value",data.main.humidity)
     document.getElementById("gauPres").setAttribute("data-value", data.main.pressure)
     document.getElementById("gauCompas").setAttribute("data-value",data.wind.deg)
     document.getElementById("gauVeloc").setAttribute("data-value",data.wind.speed)

      //footer

      descripcion = data.weather[0].description;
      let horaAmanecer = new Date(+data.sys.sunrise * 1000);
      let horaAnochecer = new Date(+data.sys.sunset * 1000);
      let horaLectura = new Date(data.dt * 1000);
      let minuto = "";
      minuto =
        horaLectura.getMinutes() > 9
          ? horaLectura.getMinutes()
          : "0" + horaLectura.getMinutes();

      let horaDiurna = `Amanece ${horaAmanecer.getHours()}:${horaAmanecer.getMinutes()},Anochece ${horaAnochecer.getHours()}:${horaAnochecer.getMinutes()}`;
                      

      console.log("ha " + horaAmanecer.getHours() + " han " + horaAnochecer);

      document.getElementById("idMedida").innerText=`H.Lectura: ${horaLectura.getHours()}:${minuto},${descripcion},${horaDiurna}`
       
      //Icono
      let iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      console.log(iconUrl);
      document.getElementById("wicon").setAttribute("src", iconUrl); 
    
   


  } catch (error) {
    console.error(`Fallo al conectar con ${URI}`)
  }

 
};

//*********************************************************************************** */

window.addEventListener("DOMContentLoaded", () => {
  console.log("Iniciando...");

  lanzaToast("Iniciando ...");

  setInterval("medida()", 3600000); // 1h
  setInterval("reloj()", 50000); //50 seg.

  reloj();
  medida();
});
