//import { gaugeCO } from "gauge.polucion.config.js";

const ciudad = "Sevilla";
const pais = "ES";
const apikey = "c2ecf0a83c555c2054704fd94ff29f9e";
const URI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`;

//Calidad del aire
const ninjasApiKey="RjSBBFp7kBNHZa3gWEFuAA==2XqINLqdoaNTiSXc"
const urlCalidaAire="https://api.api-ninjas.com/v1/airquality?city=sevilla"

let hora = "";
let minu = "";
let seg = "";
let temperatura = "";
let humedad = "";
let presion = "";
let descripcion = "";
let velocidad = "";

//Polucion Aire

let CO = 0;
let NO2 = 0;
let O3 = 0;
let PM2_5=0;
let PM10 = 0;
let SO2 = 0;
let overall_aqi = 0;

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

//**************************************************************************
 
const getCalidadAire= async () => {

  console.log(urlCalidaAire);

  try {

    let response = await fetch(urlCalidaAire,{headers:{ "X-Api-Key":ninjasApiKey}});

    let data = await response.json();

    console.log(`CO:${data.CO.concentration},NO2:${data.NO2.concentration},O3:${data.O3.concentration}
        ,PM10:${data.PM10.concentration},,SO2:${data.SO2.concentration},Total:${data.overall_aqi}  `);

    gaugeCO.value=data.CO.concentration
    gaugeNO2.value=data.NO2.concentration
    gaugeO3.value=data.O3.concentration
    gaugeSO2.value=data.SO2.concentration
    gaugePM10.value=data.PM10.concentration
   


  } catch (error) {
    console.error("Error midiendo api https://api-ninjas.com/");
  }
}

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

  
  Fecha.innerHTML =Hora.toLocaleDateString("es", { // you can use undefined as first argument
                                                  day: "2-digit",
                                                  month: "2-digit",
                                                  year: "numeric"
                                                  })
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
     gauTempMin.value = data.main.temp_min;
     gauTempMax.value = data.main.temp_max;
     gaugeHumedad.value=data.main.humidity;
     gaugePresion.value=data.main.pressure;
     gaugeCompas.value=data.wind.deg;
     gaugeVelocidad.value=data.wind.speed;
     
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

      let horaDiurna = `Amanece ${horaAmanecer.getHours()}:${horaAmanecer.getMinutes().toString().padStart(0,2)},Anochece ${horaAnochecer.getHours()}:${horaAnochecer.getMinutes().toString().padStart(2,0)}`;
                      

      console.log("ha " + horaAmanecer.getHours() + " han " + horaAnochecer);

      document.getElementById("idMedida").innerText=`H.Lectura: ${horaLectura.getHours()}:${minuto},${descripcion},${horaDiurna}`
       
      //Icono
      let iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      console.log(iconUrl);
      document.getElementById("wicon").setAttribute("src", iconUrl); 
    
      getCalidadAire();


  } catch (error) {
    console.error(`Fallo al conectar con ${URI}`)
  }

};

//************************************************************************************************

window.addEventListener("DOMContentLoaded", () => {
  console.log("Iniciando...");

  lanzaToast("Iniciando ...");

  setInterval("medida()", 3600000); // 1h
  setInterval("reloj()", 50000); //50 seg.

  
  reloj();
  medida();
});
