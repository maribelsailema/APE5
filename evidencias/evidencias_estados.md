# Evidencias de los tres estados — APE 5, Fase 1

## Proyecto
**Aula Abierta — Reserva de talleres**

## Evidencia 1 — Estado Disponible

Debe mostrar:
- El panel «Mi reserva».
- El texto de estado «Disponible».
- El botón «Confirmar reserva» habilitado.
- El botón «Cancelar reserva» deshabilitado.

**Comprobación:** al cargar la página, la reserva comienza disponible y todavía no está confirmada.

---

## Evidencia 2 — Estado Confirmada

Debe mostrar:
- El texto de estado «Confirmada».
- El botón «Confirmar reserva» deshabilitado.
- El botón «Cancelar reserva» habilitado.
- Si es posible, el indicador visual del foco sobre «Cancelar reserva».

**Comprobación:** después de activar Confirmar una sola vez, la acción duplicada queda bloqueada y el foco pasa a Cancelar.

---

## Evidencia 3 — Estado Cancelada

Debe mostrar:
- El texto de estado «Cancelada».
- El botón «Cancelar reserva» deshabilitado.
- El botón «Nueva reserva» habilitado.
- Si es posible, el indicador visual del foco sobre «Nueva reserva».

**Comprobación:** al cancelar, el estado cambia correctamente, no se permite cancelar de nuevo y el foco pasa al control que permite iniciar otra reserva.

---

## Evidencia complementaria — Recorrido con teclado

Registrar, mediante una captura o una grabación breve:
1. El foco llega a Confirmar usando `Tab`.
2. `Enter` confirma la reserva.
3. El foco pasa a Cancelar.
4. `Enter` cancela la reserva.
5. El foco pasa a Nueva reserva.

