
// candidato activo
let candidatoActual = "Candidato A";
let capaDepartamentos;

function obtenerVisitas(candidato, departamento) {
  return visitasPorCandidato?.[candidato]?.[departamento] || 0;
}

  // Función de colores
  function getColor(visitas) {
    if (visitas > 6) return '#800026';
    if (visitas > 4) return '#BD0026';
    if (visitas > 2) return '#E31A1C';
    if (visitas > 0) return '#FD8D3C';
    return '#E0E0E0';
  }

  function style(feature) {

    const nombre = feature.properties.NOMBDEP;
    const visitas = obtenerVisitas(candidatoActual, nombre);

    return {
      fillColor: getColor(visitas),
      weight: 1,
      color: '#555',
      fillOpacity: 0.7
    };
  }

  // Crear el mapa
  const map = L.map('map').setView([-9.2, -75.0], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  
  // Cargar el GeoJSON
 fetch('departamentos_peru.geojson')
  .then(response => response.json())
  .then(data => {
    capaDepartamentos = L.geoJSON(data, {
      style: style,
      onEachFeature: function (feature, layer) {
        const nombre = feature.properties.NOMBDEP;
        const visitas = obtenerVisitas(candidatoActual, nombre);

layer.bindPopup(
  '<strong>Departamento:</strong> ' + nombre + '<br>' +
  '<strong>Candidato:</strong> ' + candidatoActual + '<br>' +
  '<strong>Visitas:</strong> ' + visitas
);

        }
      }).addTo(map);

      
      // 5️⃣ Leyenda
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'info legend');
  const grades = [0, 1, 3, 5, 7];

  div.innerHTML += '<strong>Visitas</strong><br>';

  for (let i = 0; i < grades.length; i++) {
    const from = grades[i];
    const to = grades[i + 1] - 1;

    div.innerHTML +=
      '<i style="background:' + getColor(from + 1) + '"></i> ' +
      from + (to ? '&ndash;' + to : '+') + '<br>';
  }

  return div;
};

legend.addTo(map);

    });
    document.getElementById('selector-candidato').addEventListener('change', function () {
  candidatoActual = this.value;

  capaDepartamentos.eachLayer(function (layer) {
    const nombre = layer.feature.properties.NOMBDEP;
    const visitas = obtenerVisitas(candidatoActual, nombre);

    layer.setStyle({
      fillColor: getColor(visitas)
    });

    layer.setPopupContent(
      '<strong>Departamento:</strong> ' + nombre + '<br>' +
      '<strong>Candidato:</strong> ' + candidatoActual + '<br>' +
      '<strong>Visitas:</strong> ' + visitas
    );
  });
});
