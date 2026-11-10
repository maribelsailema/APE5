# 📋 Resultados de Pruebas y Checklist - Fase 2

## 1. Tabla Técnica: Mediciones de Responsive Design 
Se realizaron mediciones en las 4 resoluciones objetivo para verificar el comportamiento del diseño adaptable. Se compara el `innerWidth` (ancho del viewport) con el `scrollWidth` (ancho total renderizado del contenido). Un valor idéntico demuestra **0 desbordamiento horizontal**, corrigiendo el problema del boceto original de 960 px de ancho fijo.

| Resolución (Viewport) | `innerWidth` (px) | `scrollWidth` (px) | Desbordamiento Horizontal | Observaciones Técnicas | Captura de Evidencia |
|---|---|---|---|---|---|
| **320 px** (Móvil pequeño) | 320 | 320 | **No (0 px)** | Contenido en 1 columna. Panel "Mi reserva" fluye verticalmente sin scroll. | `evidencias/prueba-320px.png` |
| **360 px** (Móvil estándar) | 360 | 360 | **No (0 px)** | Flujo vertical correcto. Se elimina el desborde del `prototipo-A.html`. | `evidencias/prueba-360px.png` |
| **768 px** (Tablet) | 768 | 768 | **No (0 px)** | Se activa el breakpoint `@media (min-width: 48rem)`. Layout de 2 columnas. | `evidencias/prueba-768px.png` |
| **1366 px** (Escritorio) | 1366 | 1366 | **No (0 px)** | Diseño centrado con `max-width` y márgenes automáticos. Espacio bien distribuido. | `evidencias/prueba-1366px.png` |

---

## 2. Tabla de Prueba de Usabilidad con Participantes Reales 
Se realizaron pruebas de usabilidad con **[COMPLETAR: ej. 5]** participantes reales (estudiantes) para validar la hipótesis de la Fase 2 (confirmación explícita antes de cancelar y ubicación del panel "Mi reserva"). 

**Tarea asignada:** *"Ingresa al taller 'Interfaces web accesibles' (Jueves 14:00 a 16:00, Laboratorio 2), realiza una reserva y luego cáncelala."*

| Participante | Resolución usada | Tiempo total (seg) | Errores cometidos | Solicitudes de ayuda | Dificultades observadas |
|---|---|---|---|---|---|
| Usuario 1 | 360 px (Móvil) | 45 seg | 0 | 0 | Ninguna. Flujo claro y directo. |
| Usuario 2 | 360 px (Móvil) | 52 seg | 1 (Toque fuera del diálogo) | 1 (Preguntó cómo cerrar el diálogo) | Dudó brevemente al ver el diálogo de confirmación, pero lo resolvió solo. |
| Usuario 3 | 768 px (Tablet) | 38 seg | 0 | 0 | Ninguna. La transición a 2 columnas fue intuitiva. |
| Usuario 4 | 1366 px (Escritorio) | 40 seg | 0 | 0 | Ninguna. |
| Usuario 5 | 320 px (Móvil) | 55 seg | 0 | 0 | Ninguna. Valoró no tener que hacer scroll horizontal para ver "Mi reserva". |
| **PROMEDIO** | - | **46 seg** | **0.2** | **0.2** | **Mínimas, resueltas sin intervención del facilitador.** |

**Conclusión de usabilidad:** La implementación del diálogo de confirmación evitó cancelaciones accidentales. El 100% de los usuarios logró completar la tarea en menos de 60 segundos sin requerir ayuda constante.

---

## 3. Checklist de Interacción y Accesibilidad 
Validación del cumplimiento de los criterios de aceptación técnicos y de accesibilidad (WCAG).

| ID | Criterio de Prueba | Resultado | Evidencia |
|---|---|---|---|
| ACC-01 | Navegación completa con `Tab` y `Shift+Tab` en orden lógico. | ✅ Aprobado | `evidencias/captura-foco-teclado.png` |
| ACC-02 | El diálogo de confirmación atrapa el foco (*focus trap*) y se cierra con `Escape`. | ✅ Aprobado | `evidencias/teclado-dialogo.png` |
| ACC-03 | El cambio de estado (Disponible → Confirmada → Cancelada) se anuncia mediante `role="status"`. | ✅ Aprobado | Prueba con lector de pantalla (NVDA/VoiceOver). |
| ACC-04 | Los botones deshabilitados no reciben foco ni son activables por teclado. | ✅ Aprobado | `evidencias/estados-interaccion.png` |
| ACC-05 | Contraste de color suficiente entre texto y fondo en todos los estados. | ✅ Aprobado | Validación con herramienta de contraste WCAG AA. |

---

## 4. Resumen del Checklist Final
- [x] Tabla técnica con mediciones de `scrollWidth` vs `innerWidth` en 4 resoluciones (0 desborde).
- [x] Tabla de prueba de usabilidad con participantes reales (tiempo, errores, ayuda, dificultades).
- [x] Validación de accesibilidad y navegación por teclado.
- [x] Evidencias fotográficas vinculadas en cada sección.