# Evidencias de los tres estados — APE 5, Fase 1

## Proyecto
**Aula Abierta — Reserva de talleres**

Este documento organiza las capturas que deben obtenerse al ejecutar `src/reserva.js` en el navegador. Las imágenes no se incluyen todavía: deben capturarse desde la versión integrada y probada, para que sean evidencias reales y no representaciones simuladas.

## Evidencia 1 — Estado Disponible

**Nombre de archivo sugerido:** `evidencia-01-disponible.png`

Debe mostrar:
- El panel «Mi reserva».
- El texto de estado «Disponible».
- El botón «Confirmar reserva» habilitado.
- El botón «Cancelar reserva» deshabilitado.

**Comprobación:** al cargar la página, la reserva comienza disponible y todavía no está confirmada.

**Captura:** insertar aquí la imagen obtenida en el navegador.

---

## Evidencia 2 — Estado Confirmada

**Nombre de archivo sugerido:** `evidencia-02-confirmada.png`

Debe mostrar:
- El texto de estado «Confirmada».
- El botón «Confirmar reserva» deshabilitado.
- El botón «Cancelar reserva» habilitado.
- Si es posible, el indicador visual del foco sobre «Cancelar reserva».

**Comprobación:** después de activar Confirmar una sola vez, la acción duplicada queda bloqueada y el foco pasa a Cancelar.

**Captura:** insertar aquí la imagen obtenida en el navegador.

---

## Evidencia 3 — Estado Cancelada

**Nombre de archivo sugerido:** `evidencia-03-cancelada.png`

Debe mostrar:
- El texto de estado «Cancelada».
- El botón «Cancelar reserva» deshabilitado.
- El botón «Nueva reserva» habilitado.
- Si es posible, el indicador visual del foco sobre «Nueva reserva».

**Comprobación:** al cancelar, el estado cambia correctamente, no se permite cancelar de nuevo y el foco pasa al control que permite iniciar otra reserva.

**Captura:** insertar aquí la imagen obtenida en el navegador.

---

## Evidencia complementaria — Recorrido con teclado

**Nombre de archivo sugerido:** `evidencia-04-teclado.png`

Registrar, mediante una captura o una grabación breve:
1. El foco llega a Confirmar usando `Tab`.
2. `Enter` confirma la reserva.
3. El foco pasa a Cancelar.
4. `Enter` cancela la reserva.
5. El foco pasa a Nueva reserva.

## Organización recomendada

Guardar las capturas en una carpeta `evidencias/` y conservar los nombres sugeridos. No marcar una evidencia como obtenida hasta que la captura corresponda a una ejecución real.
