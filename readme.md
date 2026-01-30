# Mapa de visitas de candidatos presidenciales – Perú

Mapa web interactivo que muestra, por departamento, el número de visitas realizadas por candidatos presidenciales en el Perú.

## Alcance (Versión 1)

- Visualización por **departamentos**
- Selector de candidato
- Colores según número de visitas
- Popups con información detallada

## Limitaciones actuales

- No incluye provincias ni distritos
- No utiliza base de datos ni backend
- Los datos de visitas son cargados desde un archivo JavaScript

## Tecnologías

- HTML
- JavaScript (vanilla)
- Leaflet.js
- GeoJSON

## Datos geográficos

### Datos geográficos

Los datos geográficos de los límites administrativos del Perú (GeoJSON) utilizados en este proyecto
provienen del repositorio **juaneladio/peru-geojson** en GitHub,
publicado bajo la licencia **Mozilla Public License 2.0 (MPL-2.0)**.

Repositorio: https://github.com/juaneladio/peru-geojson :contentReference[oaicite:2]{index=2}


## Estructura del proyecto
index.html
main.js
data/
visitas.js
departamentos_peru.geojson
README.md

## Escalabilidad

El proyecto está diseñado para:
- Agregar nuevos candidatos sin modificar la lógica del mapa
- Incorporar capas adicionales (provincias, distritos)
- Ampliar el tipo de información mostrada en el futuro


