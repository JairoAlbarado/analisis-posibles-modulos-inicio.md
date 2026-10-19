# RFC 0001: Almacenamiento local de datos por generación

* **Estado:** Borrador

## 1. Decisión

Guardar los datos de los Pokémon en archivos JSON separados por generación, dentro de `src/data/pokemon/`. La aplicación leerá esos archivos localmente y no consultará una API de datos durante su uso.

## 2. Motivación

Separar los registros por generación facilita encontrar y corregir datos sin editar un único archivo grande. Todos los archivos compartirán la misma estructura para que los componentes puedan mostrar cualquier Pokémon de la misma forma.

## 3. Estructura de los datos

Cada archivo tendrá registros con estos campos: `id`, `name`, `types`, `image`, `height`, `weight`, `abilities`, `description` y `stats`.

- `height` será un número en metros y `weight` un número en kilogramos. La interfaz añadirá las unidades al mostrarlos.
- `stats` usará las claves `hp`, `atk`, `def`, `satk`, `sdef` y `spd`, correspondientes a las seis estadísticas del diseño.
- Las imágenes estarán en `public/images/pokemon/` y el JSON guardará su ruta.

Ejemplo:

```json
{
  "id": 1,
  "name": "Bulbasaur",
  "types": ["Grass", "Poison"],
  "image": "/images/pokemon/001.png",
  "height": 0.7,
  "weight": 6.9,
  "abilities": ["Overgrow", "Chlorophyll"],
  "description": "Descripción por verificar.",
  "stats": {
    "hp": 45,
    "atk": 49,
    "def": 49,
    "satk": 65,
    "sdef": 65,
    "spd": 45
  }
}}

## 4. Alternativas

- Un solo JSON: más sencillo de importar, pero reúne todos los registros en un archivo.
- Consultar una API durante el uso: evita mantener datos locales, pero depende de la red y de la disponibilidad del servicio.
- JSON por generación (propuesta): facilita mantener los datos por grupos, a cambio de tener que recopilarlos y verificarlos en el proyecto.

Se elige la tercera opción porque la información requerida puede prepararse de antemano.

## 5. Criterios de aceptación

- Cada generación incluida tiene su propio archivo JSON y todos siguen la misma estructura.
- Los identificadores del catálogo no se repiten y las rutas de imagen existen.
- Corregir un registro no requiere modificar los componentes de `React`.
- La aplicación puede usar los datos sin consultar una API externa durante su funcionamiento.

## 6. Fuera de alcance y pendientes

Este RFC no define backend, base de datos remota, movimientos ni relaciones evolutivas. Estos datos se diseñarán cuando se aborden esas funciones.

Queda pendiente definir las generaciones incluidas, el juego de referencia para datos que varían entre versiones y las fuentes autorizadas para los datos y las imágenes.

## 7. Riesgos

- Datos incorrectos o campos diferentes entre generaciones pueden provocar errores al mostrar la información.
- Separar los archivos no reduce por sí solo la carga inicial si todos se importan a la vez. La carga bajo demanda se evaluará si las mediciones de rendimiento la justifican.
- Guardar imágenes localmente no concede derechos de uso; sus condiciones deben revisarse por separado.
