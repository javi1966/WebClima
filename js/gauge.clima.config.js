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
  //height: 250,
  //width: 250,
}).draw();

//***************************************************************************************** */
const gauTempMin = new LinearGauge({
  width: "100",
  height: "250",
  renderTo: "gauTempMin",
  units: "°C",
  title: "Temp Min",
  minValue: "0",
  startAngle: "90",
  ticksAngle: "180",
  valueBox: "true",
  maxValue: "60",
  majorTicks: "[-10,0, 10, 20, 30, 40, 50 ,60]",
  minorTicks: "2",
  strokeTicks: "true",
  colorPlate: "#222",
  colorNumbers: "#eee",
  colorTitle: "rgba(0,255,255, 1)",
  colorUnits: "#ccc",
  borderShadowWidth: "0",
  borders: "false",
  needleType: "arrow",
  needleWidth: "2",
  needleCircleSize: "7",
  needleCircleOuter: "true",
  needleCircleInner: "false",
  animationDuration: "1500",
  animationRule: "linear",
  barWidth: "10",
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
  colorBorderInnerEnd: "#333",
  colorBorderInner: "#111",
  colorBorderMiddleEnd: "#111",
  colorBorderMiddle: "#222",
  colorBorderOuterEnd: "#111",
  colorBorderOuter: "#333",
  valueInt: "2",
  valueDec: "1",
}).draw();

//********************************************************************************** */
const gauTempMax = new LinearGauge({
  width: "100",
  height: "250",
  renderTo: "gauTempMax",
  units: "°C",
  title: "Temp Max",
  minValue: "0",
  startAngle: "90",
  ticksAngle: "180",
  valueBox: "true",
  maxValue: "60",
  majorTicks: "[-10,0, 10, 20, 30, 40, 50 ,60]",
  minorTicks: "2",
  strokeTicks: "true",
  colorPlate: "#222",
  colorNumbers: "#eee",
  colorTitle: "rgba(0,255,255, 1)",
  colorUnits: "#ccc",
  borderShadowWidth: "0",
  borders: "false",
  needleType: "arrow",
  needleWidth: "2",
  needleCircleSize: "7",
  needleCircleOuter: "true",
  needleCircleInner: "false",
  animationDuration: "1500",
  animationRule: "linear",
  barWidth: "10",
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
  colorBorderInnerEnd: "#333",
  colorBorderInner: "#111",
  colorBorderMiddleEnd: "#111",
  colorBorderMiddle: "#222",
  colorBorderOuterEnd: "#111",
  colorBorderOuter: "#333",
  valueInt: "2",
  valueDec: "1",
}).draw();

//************************************************************************************* */
const gaugeHumedad = new RadialGauge({
  renderTo: "gauHum",
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
    { from: 0, to: 40, color: "rgba(255,0, 0, .7)" },
    { from: 40, to: 100, color: "rgba(0, 0, 255, .3)" },
  ],
  valueInt: 2,
  valueDec: 0,
  strokeTicks: true,
  minorTicks: 2,
  majorTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  maxValue: 100,
  minValue: 0,
  title: "Humedad",
  units: "%Hr",
}).draw();

//****************************************************************** */
const gaugePresion = new RadialGauge({
  renderTo: "gauPres",
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
    { from: 850, to: 1000, color: "rgba(0,0, 255, .3)" },
    { from: 1000, to: 1200, color: "rgba(0, 255, 0, .7)" },
  ],
  valueInt: 2,
  valueDec: 0,
  strokeTicks: true,
  minorTicks: 2,
  majorTicks: [850, 900, 950, 1000, 1050, 1100, 1150, 1200],
  maxValue: 1200,
  minValue: 850,
  title: "Presion Atmosferica",
  units: "mb",
}).draw();

//******************************************************************************************** */
const gaugeCompas = new RadialGauge({
  renderTo: "gauCompas",
  minValue: "0",
  maxValue: "360",
  majorTicks: ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"],
  minorTicks: "22",
  ticksAngle: "360",
  startAngle: "180",
  strokeTicks: "false",
  highlights: "false",
  colorBorderOuter: "#333",
  colorBorderOuterEnd: "#111",
  colorPlate: "#222",
  colorMajorTicks: "#f5f5f5",
  colorMinorTicks: "#ddd",
  colorNumbers: "#ccc",
  colorNeedle: "rgba(240, 128, 128, 1)",
  colorNeedleEnd: "rgba(255, 160, 122, .9)",
  colorTitle: "#eee",
  valueBox: "false",
  valueTextShadow: "false",
  colorCircleInner: "#fff",
  colorNeedleCircleOuter: "#ccc",
  needleCircleSize: "15",
  needleCircleOuter: "false",
  animationrule: "linear",
  needleType: "arrow",
  needlewidth: "2",
  needleCircleSize: "7",
  needleCircleOuter: "true",
  needleCircleInner: "false",
  borders: "true",
  borderInnerWidth: "0",
  borderMiddleWidth: "0",
  borderOuterWidth: "10",
  colorBorderOuter: "#111",
  colorBorderOuterEnd: "#333",
  colorNeedleShadowDown: "#222",
  borderShadowWidth: "0",
  animationDuration: "1500",
  valueBoxBorderRadius: "0",
  colorValueBoxRect: "#222",
  colorValueBoxRectEnd: "#333",
  fontValue: "Led",
  fontNumbers: "Led",
  fontTitle: "Led",
  fontUnits: "Led",
  valueInt: "3",
  valueDec: "0",
  title: "Compas",
}).draw();

//*************************************************************************************
const gaugeVelocidad = new RadialGauge({
  renderTo: "gauVeloc",
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
    { from: 0, to: 10, color: "rgba(0,255, 0, .8)" },
    { from: 10, to: 15, color: "rgba(255, 0, 0, .7)" },
    { from: 15, to: 30, color: "rgba(255, 255, 0, .7)" },
  ],

  valueInt: 2,
  valueDec: 1,
  strokeTicks: true,
  minorTicks: 2,
  majorTicks: [0, 5, 10, 15, 20, 25, 30],
  maxValue: 30,
  minValue: 0,
  title: "Velocidad Viento",
  units: "m/s",
}).draw();
