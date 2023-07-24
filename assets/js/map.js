let mapOptions = {
    center:[47.90546, 19.0477],
    zoom:17
}

let map = new L.map('map', mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([47.90546, 19.0477]);
marker.addTo(map);

attribution = map.attributionControl;
attribution.setPrefix('');