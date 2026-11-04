# Registro de pruebas funcionales — APE 5, Fase 1

## 1. Identificación

- **Proyecto:** Aula Abierta — Reserva de talleres.
- **Pantalla evaluada:** Detalle del taller «Interfaces web accesibles» y panel «Mi reserva».
- **Componente:** `src/reserva.js`.
- **Objetivo:** Comprobar el recorrido Disponible → Confirmada → Cancelada, la prevención de acciones duplicadas, los anuncios accesibles y la navegación por teclado.
- **Resultado general:** APROBADO. Todas las pruebas funcionales y de navegación por teclado se completaron correctamente.

## 2. Preparación del entorno

1. Incorporar al HTML los botones Confirmar y Cancelar y la región `role="status"`.
2. Cargar el controlador JavaScript mediante `<script src="reserva.js" defer></script>`.
3. Abrir la página en el navegador.
4. Ejecutar las pruebas funcionales.
5. Comprobar el recorrido completo utilizando únicamente el teclado.

## 3. Casos de prueba

| ID | Prueba realizada | Resultado esperado | Resultado obtenido |
|---|---|---|---|
| PF-01 | Abrir la pantalla | Se muestra Disponible; Confirmar habilitado y Cancelar deshabilitado. | **APROBADO.** Se muestra correctamente el estado inicial. |
| PF-02 | Activar Confirmar | El estado cambia a Confirmada y se anuncia el mensaje. | **APROBADO.** La confirmación actualiza correctamente el estado. |
| PF-03 | Intentar confirmar nuevamente | La acción duplicada debe quedar bloqueada. | **APROBADO.** El botón Confirmar queda deshabilitado y no permite repetir la acción. |
| PF-04 | Comprobar los controles después de confirmar | Cancelar queda habilitado y recibe el foco. | **APROBADO.** El foco se traslada automáticamente al botón Cancelar. |
| PF-05 | Activar Cancelar | El estado cambia a Cancelada y se anuncia el mensaje. | **APROBADO.** La cancelación actualiza correctamente el estado. |
| PF-06 | Comprobar los controles después de cancelar | Cancelar queda deshabilitado y el foco pasa a Nueva reserva. | **APROBADO.** Se deshabilita Cancelar y el foco pasa al control disponible. |
| PF-07 | Activar Nueva reserva | El sistema regresa al estado Disponible. | **APROBADO.** Se inicia un nuevo ciclo de reserva correctamente. |
| PF-08 | Recorrer los controles con Tab y activar con Enter | Todas las acciones deben funcionar sin utilizar el ratón. | **APROBADO.** El recorrido completo funciona utilizando únicamente el teclado. |
| PF-09 | Intentar activar botones deshabilitados | No deben ejecutarse acciones ni modificarse los estados. | **APROBADO.** Los botones deshabilitados no permiten ejecutar nuevamente las acciones. |
| PF-10 | Comprobar los mensajes de estado | Cada transición debe comunicarse mediante `role="status"`. | **APROBADO.** Los mensajes se actualizan correctamente en cada transición. |

## 4. Comprobación de navegación por teclado

**Resultado: APROBADO.**

Se realizó el recorrido completo sin utilizar el ratón:

1. Se presionó `Tab` hasta llegar al botón «Confirmar reserva».
2. Se presionó `Enter` y la reserva pasó al estado Confirmada.
3. El foco se trasladó automáticamente al botón «Cancelar reserva».
4. Se presionó `Enter` y la reserva pasó al estado Cancelada.
5. El foco se trasladó al botón «Nueva reserva».
6. Se presionó `Enter` y el sistema regresó al estado Disponible.

Se comprobó que los controles deshabilitados no permiten ejecutar nuevamente las acciones.

## 5. Resultado y conclusión

**RESULTADO FINAL: APROBADO.**

- Permite pasar del estado Disponible a Confirmada.
- Impide duplicar la acción de confirmación.
- Permite cancelar una reserva confirmada.
- Actualiza los mensajes de la región `role="status"`.
- Traslada automáticamente el foco al control correspondiente después de cada acción.
- Permite completar todo el recorrido utilizando únicamente el teclado.
- Impide ejecutar acciones mediante botones deshabilitados.

Las pruebas funcionales y de accesibilidad mediante teclado se completaron satisfactoriamente.

## 6. Incidencias observadas

No se identificaron incidencias durante las pruebas funcionales ni durante la navegación por teclado.

**Estado de las pruebas:** Todas las pruebas fueron aprobadas.