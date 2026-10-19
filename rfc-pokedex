# RFC 0001: Pokédex web con datos locales por generación

* **Estado:** Borrador

## 1. Contexto y problema

Se propone desarrollar una Pokédex web inspirada en la interfaz de los videojuegos de Pokémon. La pantalla principal mostrará una cuadrícula con búsqueda por nombre o número y opciones para ordenar por número o nombre. Al seleccionar un Pokémon, se abrirá su ficha de detalle.

Para facilitar el mantenimiento de muchos registros, los datos se organizarán en archivos JSON separados por generación. La aplicación no consultará una API externa durante su uso.

## 2. Objetivos y fuera de alcance

### Objetivos

* Seguir la interfaz definida en el diseño de referencia.
* Buscar Pokémon por nombre o número y ordenar la cuadrícula por número o nombre.
* Abrir una ficha con información, habilidades y estadísticas base.
* Organizar los datos en archivos JSON por generación.
* Medir el rendimiento de la versión desplegada con Lighthouse.

### Fuera de alcance

* Crear un backend, una base de datos remota o cuentas de usuario.
* Implementar combates, equipos o guardado de progreso.
* Implementar la visualización y navegación de las evoluciones en esta versión.
* Mostrar una lista completa de los movimientos que puede aprender cada Pokémon.

## 3. Diseño propuesto

* **Interfaz:** `React`.
* **Datos:** un archivo JSON por cada generación incluida, por ejemplo `generation-1.json` y `generation-2.json`, dentro de `src/data/pokemon/`.
* **Lista:** cuadrícula de Pokémon con búsqueda por nombre o número y ordenamiento por número o nombre.
* **Ficha:** seguirá la estructura del diseño de referencia:
  * **Header:** nombre, número e imagen.
  * **Types:** tipo o tipos del Pokémon.
  * **About:** peso, altura y habilidades.
  * **Moves:** se conserva la sección indicada en el diseño; definir qué dos movimientos mostrar y cómo presentarlos queda pendiente.
  * **Base Stats:** barras para HP, ATK, DEF, SATK, SDEF y SPD.
* **Imágenes:** se guardarán como recursos separados y los JSON incluirán sus rutas.

Los archivos de cada generación usarán una estructura común. Los datos se recopilarán y verificarán antes de incorporarlos. La aplicación leerá los datos locales y no consultará una API externa durante su uso. Se registrarán las fuentes de los datos y se revisarán por separado las condiciones de uso de imágenes y otros recursos.

## 4. Alternativas consideradas

* **Un único JSON con todos los Pokémon:** es sencillo al principio, pero separar los registros por generación facilita localizar y modificar datos concretos. Se propone usar archivos separados.
* **Consultar una API durante el uso:** evita mantener datos locales, pero añade una dependencia de red y del servicio externo. Se propone preparar archivos locales.

## 5. Criterios de aceptación

* La búsqueda encuentra Pokémon por nombre o número.
* El usuario puede ordenar la cuadrícula por número o por nombre.
* Al seleccionar una tarjeta, se abre la ficha de detalle.
* La ficha coincide con las secciones del diseño: Header, Types, About, Moves y Base Stats.
* Las estadísticas muestran HP, ATK, DEF, SATK, SDEF y SPD mediante barras.
* La selección y presentación funcional de los dos movimientos queda pendiente; en esta versión se respeta el diseño de referencia.
* Los archivos de las generaciones incluidas comparten la misma estructura.
* Se registra una medición de Lighthouse de la versión desplegada.

## 6. Riesgos y decisiones pendientes

* Verificar la exactitud y consistencia de los datos.
* Definir qué dos movimientos mostrar por Pokémon y cómo se presentarán en la ficha.
* Las evoluciones quedan para una etapa futura y no forman parte de la interfaz implementada en esta versión.
* Revisar las condiciones de uso de las imágenes y otros recursos antes de mantener la web publicada.
