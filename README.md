# analisis-posibles-modulos-inicio.md
Estos son los posibles módulos que identifico a primera vista para la página de inicio, junto con sus funciones, requisitos y dudas técnicas pendientes de investigación.

# MÓDULOS POSIBLES Y SU FUNCIÓN - PÁGINA DE INICIO:

## Search

* **Requisito funcional:** Permitir que el usuario encuentre un Pokémon por su nombre o número en la Pokédex.
* **Requisito no funcional:** La búsqueda debe responder en un tiempo aceptable incluso cuando varios usuarios busquen Pokémon simultáneamente.
* **Duda técnica:** Todavía no sé cómo conseguirlo. Debo investigar cómo gestionar las solicitudes simultáneas una opción puede ser Elastic Search (debo investigar).

## Pokémon

* **Requisito funcional:** Cuando el usuario seleccione un Pokémon, se mostrará una vista con su información general.
* **Requisito no funcional:** La consulta de información debe mantener un rendimiento adecuado cuando varios usuarios consulten simultáneamente los datos de un Pokémon.
* **Duda técnica:** Debo investigar cómo obtener y almacenar temporalmente los datos, gestionar los errores de consulta y evitar solicitudes innecesarias.

## Header

* **Requisito funcional:** Mostrar la información principal de la página, incluido el título "Pokédex" y el buscador.
* **Pendiente:** Definir si el buscador será un componente independiente dentro del encabezado.

## Body

* **Requisito funcional:** Mostrar las tarjetas de los Pokémon con sus imágenes y los datos previstos en el diseño.
* **Pendiente:** Investigar cómo presentar una colección extensa sin cargar todos los datos de golpe y cómo mostrar los estados de carga, error y ausencia de resultados.

# FUENTE DE INFORMACIÓN: PokéAPI

Para obtener la información de los Pokémon utilizaré `PokéAPI`, una API que proporciona datos sobre sus características.

Los parámetros que se mostrarán en la información general de cada Pokémon serán:

* **Número en la Pokédex:** identificador del Pokémon.
* **Nombre:** nombre del Pokémon.
* **Experiencia base:** experiencia base asociada al Pokémon.
* **Altura:** altura expresada en metros.
* **Peso:** peso expresado en kilogramos.
* **Tipos:** tipos a los que pertenece el Pokémon.
* **Generación:** generación a la que pertenece su especie.
* **Estadísticas base:** PS, ataque, defensa, ataque especial, defensa especial y velocidad.

## Aspectos a investigar:

* Como hacer que la información que recupere de `PokéAPI` lo pueda usar en mi página :v
