# Hipótesis de mejora para la Fase 2 — APE 5

## 1. Hipótesis

Si en la siguiente fase se incorpora una confirmación explícita antes de cancelar una reserva y se ofrece una explicación clara de cada transición, entonces se reducirán las cancelaciones accidentales y las dudas del usuario sobre el resultado de sus acciones.

## 2. Problema que se desea validar

En la implementación actual, al activar «Cancelar reserva» la reserva pasa inmediatamente al estado Cancelada. Aunque el mensaje de estado informa el resultado y el foco se traslada al control disponible, un usuario podría cancelar por error al presionar Enter o al navegar con teclado.

También se debe validar si el cambio automático de foco resulta comprensible para personas que utilizan teclado o tecnologías de asistencia.

## 3. Propuesta de mejora

- Mostrar una pregunta de confirmación antes de cancelar: «¿Deseas cancelar esta reserva?».
- Ofrecer dos acciones claramente identificadas: «Sí, cancelar» y «Mantener reserva».
- Mantener el foco dentro del diálogo mientras esté abierto y devolverlo al control que lo abrió al cerrarlo.
- Comunicar el resultado final mediante la región accesible `role="status"`.
- Verificar el comportamiento con teclado y, si es posible, con un lector de pantalla.

## 4. Criterio de aceptación propuesto

La mejora se considerará aceptada si, en una prueba con al menos cinco participantes o cinco recorridos de prueba documentados:

1. La cancelación no se ejecuta sin una confirmación explícita.
2. La opción «Mantener reserva» conserva el estado Confirmada.
3. La opción «Sí, cancelar» cambia el estado a Cancelada.
4. El diálogo puede operarse completamente con Tab, Shift+Tab, Enter y Escape, según el comportamiento definido para cada acción.
5. El mensaje final se anuncia mediante la región de estado y el foco vuelve a una ubicación lógica.

## 5. Preguntas para validar en la Fase 2

- ¿El usuario comprende la diferencia entre Confirmar, Cancelar y Nueva reserva?
- ¿El traslado automático del foco facilita la navegación o desorienta?
- ¿El mensaje de estado es suficientemente claro?
- ¿La cancelación inmediata puede provocar errores?

## 6. Alcance

Esta hipótesis es una propuesta para validar en la Fase 2; no representa una funcionalidad ya implementada ni un resultado de investigación.
