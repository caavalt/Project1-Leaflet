function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Initialize the map
var map = L.map('map').setView([38.610273, -90.341865], 14);

// Add a base map
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);


var featureLayer = L.esri.featureLayer({
  url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/Deer_Creek_Watershed_Geodatabase_WFL1/FeatureServer/5",
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.NAME);
   
    var lucode = feature.properties.LUCODE; 
  var randomColor = getRandomColor() + 'FF'; 
if (lucode) {
  layer.setStyle({ 
    fillColor: randomColor,
    color: '#808080', 
    weight: 1.2
  });
}
  }
}).addTo(map);

var polygon = L.polygon([
    [38.608216, -90.349949],
    [38.608647, -90.349886],
    [38.609017, -90.348846],
    [38.609669, -90.348373],
    [38.609780, -90.348058],
    [38.610506, -90.347806],
    [38.610519, -90.347364],
    [38.611011, -90.347286],
    [38.610925, -90.346892],
    [38.611442, -90.346703],
    [38.611245, -90.346120],
    [38.612875, -90.345198],
    [38.614032, -90.345331],
    [38.614089, -90.345094],
    [38.613152, -90.344813],
    [38.611868, -90.345139],
    [38.611753, -90.344458],
    [38.610769, -90.344487],
    [38.611001, -90.343614],
    [38.611059, -90.342533],
    [38.610920, -90.341304],
    [38.610839, -90.340993],
    [38.610358, -90.340412],
    [38.610509, -90.337257],
    [38.610739, -90.336228],
    [38.611133, -90.336222],
    [38.611158, -90.335444],
    [38.610873, -90.335401],
    [38.611043, -90.334831],
    [38.611598, -90.334720],
    [38.611647, -90.334623],
    [38.612072, -90.334570],
    [38.612777, -90.334776],
    [38.612943, -90.334394],
    [38.612665, -90.334145],
    [38.612859, -90.333789],
    [38.612491, -90.333619],
    [38.612315, -90.333717],
    [38.611694, -90.333822],
    [38.610817, -90.334246],
    [38.610089, -90.334938],
    [38.609252, -90.335022],
    [38.608650, -90.334942],
    [38.608141, -90.335027],
    [38.608176, -90.335299],
    [38.608643, -90.335642],
    [38.609332, -90.335414],
    [38.609674, -90.335400],
    [38.609728, -90.336198],
    [38.610016, -90.336232],
    [38.609848, -90.337311],
    [38.609647, -90.338098],
    [38.609462, -90.338452],
    [38.609287, -90.339487],
    [38.609569, -90.340655],
    [38.609798, -90.342297],
    [38.609865, -90.343190],
    [38.609712, -90.344566],
    [38.609102, -90.346197],
    [38.608498, -90.347862],
    [38.608247, -90.349338]
    
    
]).addTo(map);
polygon.setStyle({fillColor: '#0000FF'});
var polygon1 = L.polygon([
    [38.612880, -90.344810],
    [38.612819, -90.343940],
    [38.612955, -90.343823],
    [38.612183, -90.339652],
    [38.612151, -90.338995],
    [38.612290, -90.337244],
    [38.612645, -90.336467],
    [38.613108, -90.334394],
    [38.612624, -90.334146],
    [38.612232, -90.334720],
    [38.611224, -90.334834],
    [38.611157, -90.336220],
    [38.610559, -90.337125],
    [38.610352, -90.340238],
    [38.611104, -90.341486],
    [38.611089, -90.343027],
    [38.610782, -90.344445],
    [38.611796, -90.344334],
    [38.611908, -90.345242]
    
   
    
]).addTo(map);
polygon.setStyle({fillColor: '#5000FF '});
var polygon2 = L.polygon([
    [38.606917, -90.336146],
    [38.606501, -90.334971],
    [38.605791, -90.335087],
    [38.605427, -90.335643],
    [38.605603, -90.336382]]).addTo(map);
var polygon3 = L.polygon([
    [38.605893, -90.334304],
    [38.605867, -90.334025],
    [38.605055, -90.334035],
    [38.604756, -90.334288],
    [38.604801, -90.334414],
    [38.605292, -90.334254],
    [38.605485, -90.334258]
]).addTo(map);
var polygon4 = L.polygon([
    [38.603466, -90.332690],
    [38.603352, -90.332704],
    [38.603264, -90.332141],
    [38.603362, -90.332158]
]).addTo(map);
var polygon5 = L.polygon([
    [38.601165, -90.325972],
    [38.600783, -90.325503],
    [38.600900, -90.325416],
    [38.601235, -90.325798]
]).addTo(map);
var polygon6 = L.polygon([
    [38.599830, -90.322966],
    [38.599608, -90.322692],
    [38.599408, -90.322477],
    [38.599234, -90.322094],
    [38.599115, -90.321762],
    [38.598968, -90.321483],
    [38.598798, -90.321179],
    [38.598709, -90.321260],
    [38.599111, -90.322041],
    [38.599335, -90.322555],
    [38.599664, -90.322973]
    
]).addTo(map);
var polygon7 = L.polygon([
    [38.600881, -90.325459],
    [38.600686, -90.325111],
    [38.600589, -90.325154],
    [38.600798, -90.325512]
]).addTo(map);
var marker1 = L.marker([38.609913, -90.347337]).addTo(map);
var marker2 = L.marker([38.610561, -90.345747]).addTo(map);
var marker3 = L.marker([38.612425, -90.345228]).addTo(map);
var marker4 = L.marker([38.610177, -90.336291]).addTo(map);
var marker5 = L.marker([38.608213, -90.335168]).addTo(map);
var marker6 = L.marker([38.610811, -90.335871]).addTo(map);
var marker7 = L.marker([38.611749, -90.334229]).addTo(map);
marker1.bindPopup("<b>Action Park</b><br>$7 million park attraction").openPopup();
marker2.bindPopup("<b>Retention Basin 1</b><br>Engineered way to offload water").openPopup();
marker3.bindPopup("<b>Underpass</b><br>Pedestrian tunnel under Manchester Rd").openPopup();
marker4.bindPopup("<b>Keeley Bridge</b><br>$10 million new bridge for Breckenridge Industrial Ct").openPopup();
marker5.bindPopup("<b>Bottleneck</b><br>Narrow design for maximum water flow speed and volume").openPopup();
marker6.bindPopup("<b>Retention Basin 2</b><br>Engineered way to offload water").openPopup();
marker7.bindPopup("<b>Retention Basin 3</b><br>Engineered way to offload water").openPopup();

polygon.bindPopup("<b>Brentwood Bound Floodplain Earthwork</b><br>$80 million dollars of sales tax").openPopup();
polygon1.bindPopup("<b>Brentwood Bound Development</b><br>$500 million Project      Brentwood giving Real Estate Company Green Street a 90% tax abatement for 10 years").openPopup();
polygon2.bindPopup("<b>Residential Properties Impacted by Flooding</b><br>The bottlneck upstream causes worse and more frequent flooding").openPopup();
polygon3.bindPopup("<b>Riprap 1</b><br>Because of increased flow, erosion occurred along the channelized creek bank, so it was replaced with a rock embankment in 2021").openPopup();
polygon4.bindPopup("<b>Riprap 2 </b><br>Because of increased flow, erosion occurred along the channelized creek bank, so it was replaced with a rock embankment").openPopup();
polygon5.bindPopup("<b>Riprap 3</b><br>Because of increased flow, erosion occurred along the channelized creek bank, so it was replaced with a rock embankment in 2024").openPopup();
polygon6.bindPopup("<b>Riprap 4</b><br>Because of increased flow, erosion occurred along the channelized creek bank, so it was replaced with a rock embankment").openPopup();
polygon7.bindPopup("<b>Riprap 5</b><br>Because of increased flow, erosion occurred along the channelized creek bank, so it was replaced with a rock embankment").openPopup();
