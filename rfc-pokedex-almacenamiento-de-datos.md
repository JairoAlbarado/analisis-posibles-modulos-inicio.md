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
}
