# APE 5 · Fase 1 — Ficha de aplicación al proyecto

## Proyecto y pantalla analizada

**Proyecto:** Aula Abierta · Talleres  
**Pantalla:** «Elige tu taller» / «Mi reserva»  
**Archivo de referencia:** `prototipo-A.html` (boceto A de escritorio).  
**Responsable:** Viviana Maribel Sarco Sailema.  
**Estado:** Diagnóstico documental inicial; las capturas y la verificación en navegador deben incorporarse después.

## 1. Diagnóstico del boceto A a 360 px

El boceto original establece `body{width:960px;margin:40px auto}` y `main{display:grid;grid-template-columns:580px 360px;gap:20px}`. En un viewport de 360 px, el ancho fijo de 960 px supera el espacio disponible. Además, la cuadrícula requiere 960 px solo para sus columnas y separación (580 + 360 + 20), sin contar el borde y el relleno de sus elementos.

### Problemas identificados en el código

| Elemento | Situación en el boceto | Efecto esperado en móvil |
|---|---|---|
| Contenedor `body` | Ancho fijo de 960 px | Desplazamiento horizontal |
| Cuadrícula `main` | Dos columnas fijas de 580 px y 360 px | La segunda columna queda fuera del primer viewport |
| Panel «Mi reserva» | Ubicado en la segunda columna | El estado de la reserva no se ve junto a la acción principal |
| Botón «Reservar un lugar» | Tiene atributo `disabled` en el boceto | No se puede activar ni probar la confirmación |
| Información de estado | Texto estático «Aún no tienes una reserva» | No comunica los cambios de confirmación o cancelación |

**Dato decisivo que se pierde de vista:** el estado de la reserva, mostrado en «Mi reserva». La persona necesita conocer si la reserva está disponible, confirmada o cancelada sin desplazarse horizontalmente.

**Observación importante:** este diagnóstico se basa en el HTML y CSS recibidos. Para completar la evidencia, abrir la página a 360 px en el navegador y adjuntar una captura real del desbordamiento.

## 2. Ficha de aplicación

| Elemento | Definición para Aula Abierta |
|---|---|
| **Actor** | Estudiante que desea reservar un lugar en un taller |
| **Tarea** | Revisar la información del taller y confirmar o cancelar su reserva |
| **Dato decisivo** | Estado actual de la reserva y disponibilidad de la acción |
| **Acción principal** | Pulsar «Reservar un lugar» |
| **Estado final** | «Confirmada» si se reserva o «Cancelada» si se cancela una reserva confirmada |

**Secuencia:** Estudiante → consulta el taller «Interfaces web accesibles» → revisa el estado de su reserva → confirma un lugar → recibe el estado «Confirmada»; si decide cancelar, ejecuta «Cancelar reserva» y recibe «Cancelada».

## 3. Regla de negocio

Una reserva solo puede confirmarse una vez por interacción. Cuando el estado pase de **Disponible** a **Confirmada**, el botón «Reservar un lugar» debe deshabilitarse para impedir una confirmación duplicada. La persona podrá cancelar la reserva confirmada; tras la cancelación, el estado será **Cancelada**.

## 4. Criterios de aceptación medibles

1. **Móvil a 360 px:** no debe existir desplazamiento horizontal y el panel «Mi reserva» debe estar visible en el flujo vertical de lectura.
2. **Escritorio a partir de 768 px:** la interfaz debe distribuirse en dos columnas sin cambiar el orden semántico del HTML.
3. **Confirmación:** al activar «Reservar un lugar» una vez, el estado debe cambiar a «Confirmada», el botón de reserva debe quedar deshabilitado y el mensaje debe anunciarse mediante `role="status"`.
4. **Cancelación:** al activar «Cancelar reserva», el estado debe cambiar a «Cancelada» y la interfaz debe anunciarlo.
5. **Teclado:** se deben poder ejecutar las acciones con Tab y Enter; después de confirmar o cancelar, el foco debe trasladarse a un control habilitado y pertinente.

## 5. Decisión HCI justificada

Se propone un diseño **Mobile-First**, con una sola columna en pantallas pequeñas y dos columnas desde `48rem` (768 px). En móvil, el contenido del taller aparecerá antes del panel «Mi reserva», pero ambos quedarán dentro de la misma lectura vertical, sin desbordarse. Esta decisión mantiene visibles la acción principal y su resultado, reduce el esfuerzo para localizar el estado y respeta el orden de lectura para usuarios de teclado y tecnologías de asistencia.

También se recomienda utilizar botones HTML nativos y una región `<p role="status">` para comunicar los cambios de estado sin depender únicamente del color.

## 6. Acuerdos para la implementación del equipo

- **HTML:** conservar un encabezado, una región principal, el artículo del taller y una sección para «Mi reserva»; utilizar controles `<button>`.
- **CSS:** evitar anchos fijos de página; empezar con una columna y utilizar `@media (min-width: 48rem)` para las dos columnas.
- **JavaScript:** manejar los estados `Disponible → Confirmada → Cancelada`, prevenir acciones duplicadas y gestionar el foco.

