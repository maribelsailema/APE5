# 🧩 APE 5 — Proyecto Aula Abierta (Fases 1 y 2 Completadas)

**Universidad Técnica de Ambato**  
**Facultad de Ingeniería en Sistemas, Electrónica e Industrial**  
**Carrera de Ingeniería de Software**  
**Asignatura:** Prácticas de Ingeniería de Software (APE 5)  
**Paralelo:** 5to "A" · Grupo 1  

---

## 📌 Descripción del Proyecto
**Aula Abierta** es un prototipo de interfaz web orientado a la consulta y reserva de espacios para talleres académicos. 

El proyecto parte de un boceto estático de escritorio (`prototipo-A.html`) con ancho fijo de 960 px, el cual presentaba graves problemas de desbordamiento horizontal en dispositivos móviles. A través de dos fases de desarrollo, se transformó en una **interfaz web adaptable, semántica, accesible y validada técnicamente**, centrada en el taller: *"Interfaces web accesibles"* (Jueves · 14:00 a 16:00 · Laboratorio 2).

---

## 🔄 Evolución del Proyecto

### 📍 Fase 1: Del Boceto a la Interfaz Adaptable
- **Diagnóstico:** Se identificó que el diseño original de 2 columnas fijas (580px + 360px) provocaba scroll horizontal y ocultaba el panel "Mi reserva" en viewports de 360 px.
- **Solución:** Se reestructuró el código utilizando **HTML5 semántico** (`<header>`, `<main>`, `<article>`, `<aside>`) y una estrategia de diseño **CSS Mobile-First**, priorizando el flujo vertical en móviles y activando el layout de dos columnas solo a partir de 768 px.

### 📍 Fase 2: Validación Técnica, QA/UX y Documentación
- **Pruebas Responsive:** Medición exhaustiva de `scrollWidth` vs `innerWidth` en 4 resoluciones (320, 360, 768 y 1366 px), demostrando **0 px de desbordamiento horizontal**.
- **Usabilidad:** Pruebas con usuarios reales para validar la hipótesis de mejora (diálogo de confirmación antes de cancelar), midiendo tiempos, errores y solicitudes de ayuda.
- **Accesibilidad:** Validación de navegación completa por teclado (`Tab`, `Enter`, `Escape`), gestión del foco (*focus trap*) y retroalimentación mediante `role="status"`.
- **Documentación:** Consolidación de evidencias, conclusiones y el informe final en formato oficial UTA.

---

## 🎯 Objetivos
1. Mantener actualizada la documentación del proyecto, reuniendo evidencias de las pruebas responsive, observación con usuarios y defensa QA/UX.
2. Validar técnicamente que la interfaz no presenta desbordamiento horizontal en ninguna de las resoluciones objetivo.
3. Sustentar las conclusiones del proyecto con datos reales de usabilidad y accesibilidad.

---

## 👥 Integrantes del Grupo

| 👤 Apellidos y Nombres | 📧 Correo Institucional | 🐙 GitHub | 🧩 Jerarquía en el Proyecto |
|---|---|---|---|
| **Guachi Aucapiña Alex Fabricio** | aguachi4414@uta.edu.ec | [A1EXF6A](https://github.com/A1EXF6A) | Desarrollador Back |
| **Pillapa Tubon Wilson Joseph** | wpillapa8482@uta.edu.ec | [W1LSONN](https://github.com/W1LSONN) | Tester |
| **Sarco Sailema Viviana Maribel** | vsarco7769@uta.edu.ec | [maribelsailema](https://github.com/maribelsailema) | QA (Líder de Documentación) |
| **Santana Duran Sebastian Israel** | ssantana1312@uta.edu.ec | [SebasIsd](https://github.com/SebasIsd) | Desarrollador Front |

### 🔄 Distribución de Responsabilidades por Fase

| 👤 Integrante | 📋 Responsabilidades Clave |
|---|---|
| **Viviana Sarco** (QA) | Diagnóstico inicial del boceto, consolidación de informes, README general, conclusiones y organización del informe final UTA. |
| **Sebastián Santana** (Desarrollador Front) | Estructura HTML5 semántica, diseño CSS Mobile-First y mediciones técnicas de responsive (`scrollWidth` vs `innerWidth`). |
| **Wilson Pillapa** (Tester) | Ejecución de pruebas de usabilidad con participantes reales, registro de tiempos, errores y dificultades observadas. |
| **Alex Guachi** (Desarrollador Back) | Lógica JavaScript (gestión de estados y foco), validación de criterios de accesibilidad (WCAG) y soporte en la integración de funcionalidades. |

---

## 🛠️ Tecnologías Utilizadas
| Tecnología | Aplicación en el Proyecto |
|---|---|
| **HTML5** | Estructura semántica y atributos ARIA (`role="status"`). |
| **CSS3** | Diseño Mobile-First, variables CSS y Media Queries (`min-width: 48rem`). |
| **JavaScript (Vanilla)** | Gestión de estados (Disponible → Confirmada → Cancelada) y control del foco. |
| **Git & GitHub** | Control de versiones, trabajo en ramas (`feature/ape5-f2-documentacion`) y Pull Requests. |
| **DevTools** | Simulación de viewports y medición precisa de dimensiones de renderizado. |

---

