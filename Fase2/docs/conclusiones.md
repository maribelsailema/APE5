# 📝 Conclusiones - Fase 2

## 1. Requisito
El sistema debe permitir la gestión de reservas en dispositivos móviles (desde 320 px) sin desbordamiento horizontal, y debe prevenir cancelaciones accidentales mediante una confirmación explícita que sea totalmente operable por teclado y accesible para lectores de pantalla.

## 2. Decisión de Diseño
Se mantuvo el enfoque **Mobile-First** de la Fase 1 (columna única < 768 px, dos columnas ≥ 768 px). Para la Fase 2, se implementó un diálogo de confirmación inline/modal antes de ejecutar la cancelación, con gestión activa del foco (`focus trap`) para que el usuario no pierda el contexto al navegar con el teclado.

## 3. Dato Observado
- **Técnico:** Las mediciones de Sebastián confirmaron que `scrollWidth` es idéntico a `innerWidth` en 320, 360, 768 y 1366 px, erradicando el desbordamiento del boceto inicial.
- **Usabilidad:** Las pruebas de Wilson mostraron que el 100% de los participantes interactuó correctamente con el diálogo de confirmación, reduciendo a cero los errores de cancelación accidental en las pruebas documentadas.
- **Accesibilidad:** Las pruebas de Alex validaron que el uso de `<button>` nativos, la gestión del foco y el atributo `role="status"` permiten una retroalimentación clara para usuarios que dependen del teclado y tecnologías de asistencia.

## 4. Limitación
El prototipo actual maneja los estados de forma local (client-side) mediante JavaScript. No existe persistencia de datos (backend o `localStorage`), por lo que al recargar la página, el estado de la reserva se reinicia a "Disponible". Además, las transiciones visuales del diálogo son inmediatas, sin animaciones que suavicen el cambio de estado.

## 5. Siguiente Iteración
- Implementar persistencia de datos utilizando `localStorage` o una conexión a API REST para mantener el estado de la reserva entre sesiones.
- Añadir transiciones CSS suaves (`transition` y `@keyframes`) para la aparición del diálogo de confirmación, mejorando la experiencia visual.
- Expandir las pruebas de usuario a un grupo más diverso, incluyendo evaluaciones formales con usuarios que utilicen lectores de pantalla (NVDA o VoiceOver) de forma habitual.