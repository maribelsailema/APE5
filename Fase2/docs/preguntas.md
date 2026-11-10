# Defensa técnica QA/UX — APE 5, Fase 2

**Proyecto:** Aula Abierta · Reserva de talleres  
**Responsable:** Alex  
**Rama prevista:** `feature/ape5-f2-interaccion`  
**Base revisada:** Fase 1 del ZIP APE5-main.

## 1. Pregunta técnica: ¿Cómo se conserva el orden de tabulación al cambiar a dos columnas?

El orden de tabulación se conserva porque depende del orden de los elementos interactivos en el HTML (DOM), no de la posición visual que adopten las columnas. En `src/index.html`, primero aparece la información del taller y después el panel «Mi reserva». La hoja `estilosAdaptable.css` utiliza una cuadrícula de una columna y, desde `48rem` (768 px), cambia a dos columnas mediante `grid-template-columns`; no utiliza `order`, posicionamiento que altere el flujo ni `tabindex` positivo.

Por tanto, al llegar al punto de corte, el contenido puede verse en paralelo, pero la lectura y el recorrido de teclado mantienen la secuencia definida en el documento. Para comprobarlo, se debe recorrer con Tab en 360, 768 y 1366 px y verificar que el foco sigue el orden del DOM.

**Sustento en Fase 1:** `evidencias/validacion-pares.md` registra una revisión aprobada del orden natural encabezado → taller → resumen → pie y aporta capturas a 360, 768 y 1366 px. La hoja adaptable establece el cambio a dos columnas en `48rem`.

## 2. Pregunta técnica: ¿Cómo se evitan las reservas duplicadas y cómo se gestiona el foco?

La prevención se realiza en dos niveles:

- **Interfaz:** al confirmar, el botón de reserva queda con el atributo nativo `disabled`, por lo que deja de ser activable y no recibe foco mediante Tab.
- **Lógica:** las funciones `confirmarReserva()` y `cancelarReserva()` verifican el estado actual antes de modificarlo. Aunque se intentara disparar un evento repetido, la transición solo se ejecuta si el estado permite esa acción.

Después de confirmar, el foco pasa a «Cancelar reserva», que es el siguiente control habilitado y permite continuar el flujo. Después de cancelar, el foco vuelve a «Reservar nuevamente», que inicia un nuevo ciclo. Los botones son elementos HTML nativos y responden a Enter cuando reciben el foco.

Los mensajes se actualizan en el elemento con `role="status"`, `aria-live="polite"` y `aria-atomic="true"`. Esto permite comunicar el resultado sin depender exclusivamente del color ni mover el foco al texto.

**Sustento en código:** revisar `src/reserva.js`, especialmente las comprobaciones de estado, el atributo `disabled`, el listener delegado y la función `renderizar()`.

## 3. Objeción de diseño: ¿La ausencia de desbordamiento horizontal garantiza que la interfaz sea fácil de utilizar?

No. Evitar el desplazamiento horizontal es una condición importante, pero no suficiente. Una página puede caber en el ancho de pantalla y aun así presentar textos difíciles de leer, botones pequeños, bajo contraste, controles poco claros, mensajes ambiguos o un recorrido de teclado confuso.

Para valorar la facilidad de uso también se deben revisar:

1. Lectura y comprensión de los textos.
2. Contraste entre texto, fondo y controles.
3. Tamaño y separación de los botones.
4. Visibilidad del foco al navegar con teclado.
5. Orden lógico de lectura y tabulación.
6. Claridad de los mensajes para Disponible, Confirmada y Cancelada.
7. Posibilidad de completar la tarea sin ratón y sin acciones duplicadas.

La Fase 1 documenta que a 360 px se utiliza una columna y que a partir de 768 px se muestran dos columnas. También registra una evidencia de foco visible. Esos datos respaldan la adaptación visual, pero no demuestran por sí solos la facilidad de uso con participantes.

## 4. Registro de pruebas funcionales

La implementación incluye estos casos para ejecutar en navegador:

| ID | Acción | Resultado esperado | Resultado observado |
|---|---|---|---|
| F2-01 | Abrir la pantalla | Disponible; Reservar habilitado; Cancelar deshabilitado | Pendiente de ejecución manual en el equipo |
| F2-02 | Tab hasta Reservar y pulsar Enter | Cambia a Confirmada | Pendiente de ejecución manual en el equipo |
| F2-03 | Confirmar otra vez | No cambia el estado; acción duplicada bloqueada | Pendiente de ejecución manual en el equipo |
| F2-04 | Revisar foco después de confirmar | Foco en Cancelar | Pendiente de ejecución manual en el equipo |
| F2-05 | Pulsar Enter en Cancelar | Cambia a Cancelada | Pendiente de ejecución manual en el equipo |
| F2-06 | Revisar foco después de cancelar | Foco en Reservar nuevamente | Pendiente de ejecución manual en el equipo |
| F2-07 | Iniciar nueva reserva | Regresa a Disponible | Pendiente de ejecución manual en el equipo |
| F2-08 | Completar el flujo solo con teclado | Recorrido completo sin ratón | Pendiente de ejecución manual en el equipo |
| F2-09 | Revisar anuncio de estado | Mensaje actualizado en `role="status"` | Pendiente de validación con lector de pantalla |

**Importante:** la carpeta de Fase 1 contiene un registro anterior que declara pruebas aprobadas para una versión previa del flujo. No se trasladan esos resultados como si fueran pruebas de esta nueva entrega. Los resultados de la tabla deben marcarse como aprobados únicamente después de ejecutar esta versión en el navegador.

## 5. Medidas y evidencias disponibles

- El punto de corte documentado es `48rem`, equivalente a 768 px con el tamaño de fuente base de 16 px.
- La revisión entre pares de Fase 1 identifica capturas a 360 px, 768 px y 1366 px, y registra que el orden natural de lectura se conserva.
- La evidencia `evidencias/estados-interaccion.png` de esta entrega es una **composición ilustrativa** de los tres estados, no una captura de una sesión real de navegador.
- Para cerrar la defensa, se recomienda reemplazarla por capturas reales del navegador y completar la columna «Resultado observado» después de la prueba con teclado.

## 6. Observaciones para la defensa cruzada QA/UX

- `disabled` es preferible a simular la inactividad solo con CSS: el navegador impide la activación y excluye el control del recorrido de teclado.
- El foco se mueve únicamente después de una transición válida, hacia el control disponible.
- `role="status"` comunica el resultado de forma no intrusiva; no es necesario enfocar el mensaje.
- La ausencia de desbordamiento no reemplaza pruebas de comprensión, contraste, foco y tareas con usuarios.
- No se afirma que se realizaron pruebas con usuarios ni con lector de pantalla si no se dispone de esos registros.

## 7. Entrega a Viviana

Compartir la carpeta de Fase 2 con `src/reserva.js`, `src/index.html` y `src/estilosAdaptable.css` (archivos de soporte para ejecutar la interacción), además de este documento y la evidencia ilustrativa. Adjuntar las capturas reales y completar los resultados observados una vez realizadas las pruebas del equipo.
