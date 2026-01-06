let map = L.map('map', { zoomControl:false }).setView([48.8566,2.3522], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  maxZoom:19
}).addTo(map);

let radarLayer = L.layerGroup().addTo(map);

let myPos = null;
let carMarker = null;
let bearing = 0;
let mode = "north";
let exploration = true;

const alertBox = document.getElementById('alert');
const distTxt = document.getElementById('dist');

// 🚗 ICÔNE VOITURE
const carIcon = L.divIcon({
  html:`<svg width="40" height="40" viewBox="0 0 100 100">
  <polygon points="50,5 90,90 50,70 10,90" fill="#E81922"/></svg>`,
  iconSize:[40,40],
  iconAnchor:[20,20]
});

// 📡 RADARS (CACHE LOCAL)
let radars = JSON.parse(localStorage.getItem("radars")) || [
  {lat:48.857, lng:2.35},
  {lat:48.854, lng:2.36},
  {lat:48.859, lng:2.34}
];
localStorage.setItem("radars", JSON.stringify(radars));

// 📍 POSITION
function updateCar(latlng){
  if(myPos){
    bearing = L.GeometryUtil.getBearing(myPos, latlng);
  }
  myPos = latlng;

  if(!carMarker){
    carMarker = L.marker(myPos,{icon:carIcon}).addTo(map);
  } else {
    carMarker.setLatLng(myPos);
  }

  carMarker.getElement().style.transform = `rotate(${bearing}deg)`;

  if(exploration) map.setView(myPos);

  checkRadars();
  rotateMap();
}

// 🔁 ROTATION CARTE
function rotateMap(){
  const el = document.getElementById('map');
  el.style.transform = mode==="direction" ? `rotate(${-bearing}deg)` : `rotate(0deg)`;
}

// 📡 RADARS
function checkRadars(){
  radarLayer.clearLayers();
  alertBox.style.display="none";

  radars.forEach(r=>{
    const pos = L.latLng(r.lat,r.lng);
    const d = map.distance(myPos,pos);

    L.circleMarker(pos,{
      radius:6,
      color:'red'
    }).addTo(radarLayer);

    if(d<500){
      alertBox.style.display="block";
      distTxt.textContent = Math.round(d);
      if(navigator.vibrate) navigator.vibrate(200);
    }
  });
}

// 🎮 BOUTONS
gpsBtn.onclick = ()=>{
  navigator.geolocation.watchPosition(p=>{
    updateCar(L.latLng(p.coords.latitude,p.coords.longitude));
  }, console.error, {enableHighAccuracy:true});
};

centerBtn.onclick = ()=> exploration = true;

modeBtn.onclick = ()=>{
  mode = mode==="north" ? "direction" : "north";
  modeBtn.textContent = mode==="north" ? "NORD" : "SENS";
};

simBtn.onclick = ()=>{
  exploration = true;
  let t=0;
  setInterval(()=>{
    updateCar(L.latLng(
      48.8566 + Math.sin(t)*0.002,
      2.3522 + Math.cos(t)*0.002
    ));
    t+=0.1;
  },1000);
};
