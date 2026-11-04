# Documentación de Trabajo: Estructura HTML5 Semántica y Accesibilidad (Fase 1 - APE 5)

**Desarrollador:** @Sebaslsd  
**Rama de Git:** `feature/ape5-html-semantico`  
**Revisor de PR:** @maribelsailema  

---

## 📋 Resumen del Trabajo Realizado

En esta tarea se realizó la construcción de la estructura semántica en HTML5 para la pantalla de selección de talleres de **Aula Abierta** (Fase 1 de la APE 5). El objetivo principal fue corregir los problemas de desborde y pérdida de información identificados en el **Boceto A (a 360 px)**, sentando una base HTML robusta, accesible por teclado e integrada para futuros estilos CSS y scripts JS.

---

## 🛠️ Cambios e Implementaciones Detalladas

### 1. Creación de la Estructura de Proyecto y Archivo Principal
* **Ruta del archivo:** `src/index.html`
* Se configuró el documento HTML5 estándar con etiquetas `<head>` adecuadas (`viewport`, `charset="utf-8"`) para garantizar el comportamiento adaptable.
* Se enlazaron anticipadamente los archivos de hoja de estilo (`estilos.css`) y script dinámico (`reserva.js`).

### 2. Jerarquía y Etiquetas Semánticas HTML5
Se reemplazó la estructura basada en contenedores genéricos por elementos semánticos estándar:
* **`<header>`**: Contiene el título principal de la aplicación (*Aula Abierta · Talleres*).
* **`<main>`**: Define el núcleo de contenido principal de la interfaz.
* **`<section>`**: Agrupa el catálogo de talleres disponibles.
* **`<article>`**: Delimita la tarjeta del taller específico (*Interfaces web accesibles*).
* **`<aside>`**: Contiene el panel lateral reservado para el resumen y estado de la reserva del usuario (*Mi reserva*).

### 3. Representación Estructurada de Datos (`<dl>`)
Se implementó una lista de definición (`<dl>`) para asociar de forma clara y accesible los datos del taller con sus respectivos valores:
* **`<dt>` (Término):** `Horario:` → **`<dd>` (Detalle):** `Jueves · 14:00 a 16:00`
* **`<dt>` (Término):** `Ubicación:` → **`<dd>` (Detalle):** `Laboratorio 2`

### 4. Accesibilidad y Navegación por Teclado
* Se integró un botón nativo `<button id="btn-reservar" type="button">` para garantizar que sea reconducible por tecnologías de asistencia y navegable de forma nativa mediante la tecla `Tab`.
* Se envolvió el botón dentro de un contenedor `<div id="contenedor-acciones">` para permitir el intercambio dinámico entre estados (Reservar / Cancelar) en las siguientes etapas.

### 5. Región Dinámica de Estado (`role="status"`)
* En la sección `<aside>`, se asignó el atributo ARIA `role="status"` al elemento `<p id="estado-reserva">`:
  ```html
  <p id="estado-reserva" role="status">Aún no tienes una reserva.</p>