# Registro de pruebas funcionales — APE 5, Fase 1

## 1. Identificación

- **Proyecto:** Aula Abierta — Reserva de talleres.
- **Pantalla evaluada:** detalle del taller «Interfaces web accesibles» y panel «Mi reserva».
- **Componente:** `src/reserva.js`.
- **Objetivo:** comprobar el recorrido Disponible → Confirmada → Cancelada, la prevención de acciones duplicadas, los anuncios accesibles y la navegación por teclado.

## 2. Preparación del entorno

1. Incorporar al HTML los dos botones y la región `role="status"` indicados en `README-integracion.md`.
2. Cargar `src/reserva.js` con `<script src="reserva.js" defer></script>` (ajustar la ruta según la ubicación real).
3. Abrir la página en un navegador actualizado.
4. Ejecutar las pruebas primero con ratón y luego únicamente con teclado.
5. Recargar la página antes de iniciar una nueva ronda, si es necesario.

## 3. Casos de prueba

| ID | Estado inicial / acción | Resultado esperado | Resultado real |
|---|---|---|---|
| PF-01 | Abrir la pantalla | Se muestra «Disponible»; Confirmar está habilitado y Cancelar deshabilitado. | Pendiente de ejecución |
| PF-02 | Activar Confirmar | El estado cambia a «Confirmada» y el mensaje se anuncia en `role="status"`. | Pendiente de ejecución |
| PF-03 | Después de confirmar, intentar confirmar otra vez | Confirmar permanece deshabilitado; no se genera una segunda confirmación. | Pendiente de ejecución |
| PF-04 | Después de confirmar | Cancelar queda habilitado y recibe el foco automáticamente. | Pendiente de ejecución |
| PF-05 | Activar Cancelar | El estado cambia a «Cancelada» y el mensaje se anuncia. | Pendiente de ejecución |
| PF-06 | Después de cancelar | Cancelar queda deshabilitado; el foco pasa al control «Nueva reserva». | Pendiente de ejecución |
| PF-07 | Usar «Nueva reserva» | Se vuelve al estado «Disponible» y el foco permanece en Confirmar. | Pendiente de ejecución |
| PF-08 | Recorrer controles con Tab y activar con Enter | Los controles siguen el orden lógico y todas las acciones disponibles funcionan sin ratón. | Pendiente de ejecución |
| PF-09 | Intentar activar un botón deshabilitado | El navegador impide su activación y la lógica no modifica el estado. | Pendiente de ejecución |
| PF-10 | Revisar mensajes de estado | Cada transición se comunica mediante la región `role="status"` sin depender únicamente del color. | Pendiente de ejecución |

## 4. Procedimiento de teclado

1. Recargar la página y no utilizar el ratón.
2. Presionar `Tab` hasta llegar a «Confirmar reserva».
3. Presionar `Enter`: debe cambiar a Confirmada.
4. Comprobar visualmente que el foco se desplaza a «Cancelar reserva».
5. Presionar `Enter`: debe cambiar a Cancelada.
6. Comprobar que el foco se desplaza a «Nueva reserva».
7. Presionar `Enter`: debe regresar a Disponible.
8. Comprobar que Confirmar está habilitado y Cancelar deshabilitado.

**Nota:** un botón con el atributo `disabled` no debe recibir el foco mediante Tab ni ejecutar su acción. El controlador también valida el estado para evitar transiciones inválidas.

## 5. Resultado y conclusión

**Estado del registro: pendiente de ejecución en navegador.** Los resultados esperados están definidos, pero no se declaran como aprobados hasta realizar las pruebas sobre la página integrada.

Al completar la ejecución, reemplazar «Pendiente de ejecución» por «Aprobado» o «Fallido» y añadir observaciones cuando corresponda.

## 6. Incidencias observadas

| Fecha | ID de prueba | Incidencia | Acción correctiva |
|---|---|---|---|
| Por completar | — | Registrar aquí cualquier comportamiento distinto al esperado. | Por completar |
