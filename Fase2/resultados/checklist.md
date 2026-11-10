# Checklist de Validación Semántica HTML5 y Pruebas con Usuarios · Fase 2

**Proyecto:** Aula Abierta · Reserva de Talleres Prácticos  
**Responsable:** Wilson (@W1LSONN)  
**Revisor:** Viviana (@maribelsailema)  
**Rama:** `feature/ape5-f2-semantica-usuarios`  
**Fecha de evaluación:** 10 de Noviembre de 2026  

---

## 1. 🧱 Validación de la Estructura Semántica HTML5 (`src/index.html`)

Se realizó una inspección técnica minuciosa del árbol del DOM y del árbol de accesibilidad en el navegador:

| Elemento Semántico | Estado | Criterio de Verificación y Justificación Técnica |
|---|:---:|---|
| `<header>` | **CUMPLE** | Contiene el título principal de la aplicación (`<h1>Aula Abierta · Talleres</h1>`), proporcionando orientación global e identidad al sitio. |
| `<main>` | **CUMPLE** | Delimita la tarea central de la pantalla (consulta de talleres y gestión de reserva). No se repite en el documento. |
| `<section>` | **CUMPLE** | Agrupa de forma lógica la sección interactiva «Elige tu taller» vinculada mediante `aria-labelledby="seccion-talleres"`. |
| `<article>` | **CUMPLE** | Estructura la tarjeta del taller «Interfaces web accesibles» como una unidad autocontenida de contenido independiente. |
| `<dl>`, `<dt>`, `<dd>` | **CUMPLE** | Implementa listas de definición semánticas para los pares clave-valor (Horario: Jueves 14:00-16:00, Ubicación: Laboratorio 2), evitando párrafos genéricos o divs sin significado. |
| `<aside>` | **CUMPLE** | Aloja el panel «Mi reserva». Al ser contenido complementario al flujo principal, la etiqueta `<aside>` es la correcta según los estándares W3C. |
| Botones nativos `<button>` | **CUMPLE** | Las acciones usan controles `<button type="button">` nativos. No se usan enlaces simulados `<a>` ni `<div>` con eventos onclick. Son operables nativamente por teclado con `Tab`, `Enter` y `Espacio`. |
| Región `role="status"` | **CUMPLE** | El elemento `<p id="estado-reserva" role="status" aria-live="polite">` existe en el DOM y notifica en tiempo real los cambios («Disponible», «Confirmada», «Cancelada») a tecnologías de asistencia. |
| Orden de lectura lógico | **CUMPLE** | El orden lineal del código HTML coincide con la secuencia cognitiva: Identidad → Título de tarea → Taller → Horario/Ubicación → Acción de reserva → Resumen del estado. |

---

## 2. ⌨️ Verificación de Navegación por Teclado y Orden de Tabulación

Se realizaron pruebas de recorrido completo sin puntero de ratón utilizando únicamente las teclas `Tab`, `Shift + Tab`, `Enter` y `Espacio`:

- [x] **Secuencia hacia adelante con `Tab`:** El cursor de foco avanza de manera predecible: primero al botón «Reservar un lugar» y luego a los controles del resumen.
- [x] **Secuencia hacia atrás con `Shift + Tab`:** El retroceso del foco se ejecuta en el orden inverso exacto sin quedar atrapado en trampas de teclado (Keyboard Traps).
- [x] **Comprobación en 2 columnas (Punto de corte en 48rem / 768 px):** Al activarse el diseño en dos columnas mediante CSS Grid, **el orden de tabulación no se altera**. El teclado sigue respetando el orden del DOM original (primero columna izquierda del taller y luego columna derecha de «Mi reserva»).
- [x] **Visibilidad del indicador de foco:** Los controles interactivos muestran un anillo de foco destacado de 3px con sombra perimetral de contraste elevado (`:focus-visible`).
- [x] **Traslado automático del foco:** Al presionar Enter en «Reservar un lugar», el botón se inhabilita para prevenir clics dobles y el foco se transfiere de inmediato con `.focus()` al botón «Cancelar reserva». Al cancelar, el foco retorna al botón de reserva.

---

## 3. 👥 Pruebas de Observación con Usuarios Reales

### 🗣️ Consigna Neutral de Observación
> *"Necesitas asistir al taller del jueves. Averigua dónde se dicta, reserva un lugar y después cancélalo."*

*Nota metodológica:* La consigna se presentó de forma verbal y escrita sin orientar al participante sobre dónde mirar, qué controles presionar ni qué atajos de teclado emplear.

---

### 📊 Tabla de Registro de Observación

Las pruebas fueron aplicadas a compañeros de otros grupos de trabajo de la asignatura Interacción Humano-Computador:

| Participante | Perfil del Usuario | Resolución evaluada | Tiempo total (s) | Errores cometidos | Ayudas solicitadas | Dificultades observadas |
|:---:|---|:---:|:---:|:---:|:---:|---|
| **P-01** | Estudiante 5to Semestre (Grupo 2) | **360 px** (Móvil emulado) | **14.2 s** | **0** | **0** | En la vista de una sola columna, el participante leyó el horario inmediatamente. Realizó un leve scroll vertical para consultar el resumen. Al pulsar «Reservar un lugar», el botón cambió a «Reservado» y apareció «Cancelar reserva»; requirió un par de segundos para notar el cambio de color verde en el mensaje inferior antes de pulsar cancelar. |
| **P-02** | Estudiante 5to Semestre (Grupo 3) | **768 px** (Escritorio / Tablet) | **7.8 s** | **0** | **0** | Ninguna dificultad. Gracias a la distribución en dos columnas simultáneas, el usuario identificó el Laboratorio 2 a la izquierda y el estado a la derecha al mismo tiempo. Al pulsar Enter, el foco se trasladó a «Cancelar reserva», permitiéndole cancelar en menos de 8 segundos. |

---

## 4. 📝 Hallazgos y Análisis para el Informe de Viviana

Para consolidar en el informe grupal de la Fase 2, se destacan los siguientes resultados empíricos:

1. **Eficacia del 100%:** Ambos participantes completaron la secuencia completa (localizar horario → reservar cupo → cancelar reserva) con **0 errores de navegación** y **0 solicitudes de ayuda**.
2. **Eficiencia superior en escritorio (7.8 s vs 14.2 s):** La disposición de dos columnas a 768 px reduce el tiempo de resolución en un **45%**, debido a que la visión periférica abarca la acción y el estado al mismo tiempo sin necesidad de scroll vertical.
3. **Validación de la hipótesis de la Fase 1:** El bloqueo del botón reservado (`disabled`) impidió de forma absoluta cualquier confirmación duplicada. La presencia del botón «Cancelar reserva» otorgó pleno control y libertad al usuario (Heurística #3 de Nielsen).
4. **Accesibilidad comprobada:** El indicador visual `:focus-visible` y el traslado automático de foco permitieron a usuarios de teclado operar la aplicación con rapidez récord.

---

## 5. ✅ Lista de Criterios de Aceptación del Issue

- [x] Estructura HTML5 semántica validada (`header`, `main`, `section`, `article`, `dl`, `aside`).
- [x] Orden de lectura lógico y secuencial comprobado.
- [x] Navegación con teclado comprobada (`Tab`, `Shift + Tab`, `:focus-visible`).
- [x] Pruebas de observación realizadas con participantes reales de otros grupos.
- [x] Tiempos, errores y ayudas debidamente registrados en tabla estructurada.
- [x] Hallazgos y conclusiones documentados para el informe final de Viviana.
