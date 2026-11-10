# Descripción del Trabajo Realizado · Diseño Adaptable Mobile-First

## 📌 Resumen de la Implementación

En esta tarea se implementó el diseño adaptable de la interfaz mediante la metodología **CSS Mobile-First**, resolviendo los problemas críticos de desbordamiento horizontal detectados en el boceto de escritorio inicial a 360 px.

### 1. Solución al desbordamiento en móviles (360 px)
- Se eliminó el ancho rígido de `width: 960px` y se sustituyó por un modelo de caja fluido con `box-sizing: border-box` y contenedores con `max-width: 100%`.
- Se configuró la distribución principal en **una sola columna vertical** (`grid-template-columns: 1fr`).
- La tarjeta del taller (`<article>`) y el panel de resumen (`<aside>`) se apilan verticalmente, garantizando que todos los datos decisivos (horario, lugar) y el estado de la reserva sean 100% visibles sin desplazamiento horizontal.

### 2. Punto de corte adaptable en 48rem (768 px)
- Mediante la regla `@media (min-width: 48rem)`, la interfaz cambia automáticamente a **dos columnas** en pantallas de tablet y escritorio (`minmax(0, 1.5fr) minmax(0, 1fr)`).
- Se conserva intacto el orden de lectura semántico original del HTML.

### 3. Accesibilidad y Foco Teclado
- Se implementaron estilos de foco visible mediante `:focus-visible` con un anillo de alto contraste (3px de grosor y 3px de desplazamiento).
- Los botones cuentan con una altura mínima de 48 px para asegurar un área táctil accesible en dispositivos móviles según pautas WCAG 2.1.
