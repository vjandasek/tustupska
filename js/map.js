const API_KEY = 'cNs5BMkRb28YSCsnccaOl5iB61lTQ1-WMv5nFIL3IhI';

const map = L.map('map').setView([49.9034994, 18.0720839], 16);

const tileLayers = {
  'Turistická': L.tileLayer(`https://api.mapy.cz/v1/maptiles/outdoor/256/{z}/{x}/{y}?apikey=${API_KEY}`, {
    minZoom: 0,
    maxZoom: 19,
    attribution: '<a href="https://api.mapy.cz/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
  }),
  'Satelitní': L.tileLayer(`https://api.mapy.cz/v1/maptiles/aerial/256/{z}/{x}/{y}?apikey=${API_KEY}`, {
    minZoom: 0,
    maxZoom: 19,
    attribution: '<a href="https://api.mapy.cz/copyright" target="_blank">&copy; Seznam.cz a.s. a další</a>',
  }),
}
tileLayers['Turistická'].addTo(map);
L.control.layers(tileLayers).addTo(map);

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var marker = L.marker([49.9028994, 18.0720839], {icon: greenIcon}).addTo(map);
marker.bindPopup("<b>Slezský grunt - místo svatby</b>");

var parkingIcon = L.divIcon({
  html: '<span class="fa-stack fa-1x">\
      <i class="fa fa-square fa-stack-2x icon-p-bg"></i>\
      <i class="fa-solid fa-parking fa-stack-2x icon-p"></i>\
    </span>',
  iconSize: [30, 24],
  className: 'parking-icon'
});

var parkingIcon2 = L.divIcon({
  html: '<span class="fa-stack fa-2x">\
      <i class="fa fa-square fa-stack-2x icon-p-bg"></i>\
      <i class="fa-solid fa-parking fa-stack-2x icon-p"></i>\
    </span>',
  iconSize: [60, 48],
  className: 'parking-icon'
});

var noParkingIcon = L.divIcon({
  html: '<span class="fa-stack fa-1x">\
      <i class="fa fa-square fa-stack-2x icon-p-bg"></i>\
      <i class="fa-solid fa-parking fa-stack-2x icon-p"></i>\
      <i class="fa-solid fa-slash fa-stack-2x icon-no-p"></i>\
    </span>',
  iconSize: [30, 24],
  className: 'parking-icon'
});

// duchodak
L.polygon([
  [49.9039978, 18.0735469],
  [49.9038597, 18.0734881],
  [49.9038181, 18.0737347],
  [49.9039461, 18.0737992]
], { color: 'green' }).addTo(map).bindPopup("<b>Parkoviště pod domovem pro seniory</b><br>cca pro 15 aut</b>");
L.marker(
  [49.9039136, 18.0736389], {icon: parkingIcon2}
).addTo(map).bindPopup("<b>Parkoviště pod domovem pro seniory</b><br>cca pro 15 aut</b>");

// u viaduktu
L.polygon([
  [49.9064253, 18.0716622],
  [49.9061847, 18.0716794],
  [49.9062056, 18.0717572],
  [49.9064181, 18.0717250]
], { color: 'green' }).addTo(map).bindPopup("<b>Kdyby byla nouze, můžete zaparkovat i zde. Legální parkoviště.</b>");
L.marker(
  [49.9063128, 18.0717089], {icon: parkingIcon}
).addTo(map).bindPopup("<b>Kdyby byla nouze, můžete zaparkovat i zde. Legální parkoviště!</b>");

// u cypa
L.polyline([
  [49.9027333, 18.0726710],
  [49.9024242, 18.0730206]
], { color: 'red' }).addTo(map).bindPopup("<b>Tady neparkovat!</b>");
L.polyline([
  [49.9027178, 18.0725642],
  [49.9023964, 18.0729531]
], { color: 'red' }).addTo(map).bindPopup("<b>Tady neparkovat!</b>");
L.marker(
  [49.9025714, 18.0728450], {icon: noParkingIcon}
).addTo(map).bindPopup("<b>Tady neparkovat!</b>");

// u jednoty
L.polygon([
  [49.9023808, 18.0731783],
  [49.9023272, 18.0731303],
  [49.9021892, 18.0733339],
  [49.9023464, 18.0734761]
], { color: 'red' }).addTo(map).bindPopup("<b>Tady neparkovat!</b>");
L.marker(
  [49.9022981, 18.0733233], {icon: noParkingIcon}
).addTo(map).bindPopup("<b>Tady neparkovat!</b>");

// pred jednotou
L.polyline([
  [49.9022894, 18.0730631],
  [49.9018833, 18.0736372]
], { color: 'green' }).addTo(map).bindPopup("<b>Parkoviště sice není značeno, ale s rozumem se zde dá parkovat</b>");
L.marker(
  [49.9020717, 18.0733689], {icon: parkingIcon}
).addTo(map).bindPopup("<b>Parkoviště sice není značeno, ale s rozumem se zde dá parkovat</b>");

// Slepa
L.polyline([
  [49.9023878, 18.0731758],
  [49.9029583, 18.0736069]
], { color: 'green' }).addTo(map).bindPopup("<b>Pár značených míst před domy</b>");
L.marker(
  [49.9026419, 18.0733683], {icon: parkingIcon}
).addTo(map).bindPopup("<b>Pár značených míst před domy</b>");

// pred Gruntem
L.polyline([
  [49.9025694, 18.0720997],
  [49.9032000, 18.0731511]
], { color: 'red' }).addTo(map).bindPopup("<b>Tady neparkovat!</b>");
L.marker(
  [49.9028789, 18.0726414], {icon: noParkingIcon}
).addTo(map).bindPopup("<b>Tady neparkovat!</b>");

// Poddubi
L.polyline([
  [49.9032658, 18.0733172],
  [49.9035578, 18.0737331],
  [49.9040847, 18.0739744],
  [49.9044283, 18.0738189],
  [49.9048914, 18.0728211],
  [49.9052644, 18.0723625],
  [49.9061750, 18.0717669]
], { color: 'green' }).addTo(map).bindPopup("<b>Parkoviště sice není značeno, ale s rozumem se zde dá parkovat</b>");
L.marker(
  [49.9046494, 18.0733389], {icon: parkingIcon}
).addTo(map).bindPopup("<b>Parkoviště sice není značeno, ale s rozumem se zde dá parkovat</b>");

const LogoControl = L.Control.extend({
  options: {
    position: 'bottomleft',
  },
  onAdd: function (map) {
    const container = L.DomUtil.create('div');
    const link = L.DomUtil.create('a', '', container);

    link.setAttribute('href', 'http://mapy.cz/');
    link.setAttribute('target', '_blank');
    link.innerHTML = '<img src="https://api.mapy.cz/img/api/logo.svg" />';
    L.DomEvent.disableClickPropagation(link);

    return container;
  },
});

new LogoControl().addTo(map);