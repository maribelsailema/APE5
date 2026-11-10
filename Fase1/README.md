
<div align="center">


**Universidad Técnica de Ambato**  
**Facultad de Ingeniería en Sistemas, Electrónica e Industrial**  
**Ingeniería de Software**

### 🧩 APE 5 — Fase 1
**Del boceto a la interfaz web adaptable**  
HTML5 · CSS Mobile-First · JavaScript · Accesibilidad



</div>

---



## 📌 Descripción del proyecto

**Aula Abierta** es un prototipo de interfaz web orientado a la reserva de espacios para participar en talleres académicos.

La aplicación permite que un estudiante consulte la información de un taller, identifique su disponibilidad y realice acciones relacionadas con su reserva.

En esta práctica se trabaja con el taller:

**Interfaces web accesibles**

| 📋 Información | 📌 Detalle |
|---|---|
| 🏫 Proyecto | Aula Abierta |
| 📚 Taller | Interfaces web accesibles |
| 📅 Día | Jueves |
| 🕑 Horario | 14:00 a 16:00 |
| 📍 Lugar | Laboratorio 2 |
| 🎯 Acción principal | Reservar un lugar |
| 📱 Vista móvil | 360 px |
| 💻 Vista escritorio | 768 px y 1366 px |
| ⏱️ Duración de la práctica | 180 minutos |

El desarrollo de la Fase 1 parte de un boceto de escritorio que presenta problemas al visualizarse en dispositivos móviles.

Por ello, se propone reorganizar el contenido mediante un diseño adaptable que facilite la consulta del taller y el seguimiento del estado de la reserva.

---

## 🎯 Objetivos

### 🎯 Objetivo general

Transformar el boceto inicial de Aula Abierta en una interfaz web adaptable, utilizando HTML5 semántico, CSS Mobile-First y JavaScript para mejorar la visualización, la interacción y la accesibilidad durante el proceso de reserva de talleres.

### 📍 Objetivos específicos

- 🔍 Identificar los problemas de desbordamiento horizontal presentes en el boceto inicial a 360 px.
- 📝 Documentar el actor, la tarea, el dato decisivo, la acción principal y el estado final esperado.
- 🧱 Construir una estructura HTML5 semántica con un orden lógico de lectura.
- 📱 Aplicar un diseño Mobile-First que funcione en pantallas móviles y de escritorio.
- ⚙️ Implementar los estados Disponible, Confirmada y Cancelada.
- ♿ Permitir la navegación y ejecución de acciones mediante teclado.
- 🧪 Comprobar el funcionamiento de la interfaz mediante pruebas funcionales y capturas de pantalla.

---

## 👥 Integrantes y responsabilidades

El proyecto se organiza en cuatro Issues para distribuir las actividades de la Fase 1.

| 👤 Integrante | 🧩 Issue | 📋 Responsabilidad |
|---|---|---|
| Viviana | Issue #1 | Diagnóstico móvil, ficha del proyecto y README general |
| Sebastián | Issue #2 | Estructura HTML5 semántica |
| Wilson | Issue #3 | Diseño CSS Mobile-First |
| Alex | Issue #4 | Interacción JavaScript, pruebas y evidencias |

### 🔄 Organización del trabajo

Cada integrante desarrolla su actividad en una rama independiente y posteriormente presenta un Pull Request para integrar sus cambios al repositorio principal.

Las actividades se distribuyen de la siguiente manera:

**📝 Documentación:** diagnóstico del boceto y requisitos.

**🧱 Estructura:** organización semántica de la interfaz.

**🎨 Diseño:** adaptación visual a diferentes tamaños de pantalla.

**⚙️ Funcionalidad:** gestión de reservas, estados y accesibilidad.

---

## 🔍 Diagnóstico del boceto inicial

### 🖥️ Situación inicial

El archivo `prototipo-A.html` presenta un boceto diseñado para escritorio.

Su estructura utiliza dimensiones fijas:

```css
body {
    width: 960px;
    margin: 40px auto;
}

main {
    display: grid;
    grid-template-columns: 580px 360px;
    gap: 20px;
}
```

### ⚠️ Problema identificado

Al visualizar el boceto en una pantalla de 360 px, el contenido supera el ancho disponible.

Esto provoca desplazamiento horizontal y dificulta consultar el panel **Mi reserva**, que aparece a la derecha del contenido principal.

El usuario puede visualizar parcialmente la información del taller, pero no tiene una visión completa del estado de su reserva sin desplazarse horizontalmente.

### 📊 Comparación

| Elemento | Boceto inicial | Solución propuesta |
|---|---|---|
| Ancho del contenido | Fijo de 960 px | Adaptable |
| Distribución móvil | Dos columnas fijas | Una columna |
| Panel Mi reserva | Fuera de la vista inicial | Debajo del taller |
| Desplazamiento horizontal | Provocado por anchos fijos | Eliminado |
| Lectura | Fragmentada en móvil | Orden lógico |
| Acciones | Boceto estático | Botones funcionales |

### 💡 Propuesta de mejora

Aplicar un diseño Mobile-First que muestre primero la información del taller y después el panel de reserva.

A partir de 768 px, la interfaz podrá utilizar dos columnas sin alterar el orden de lectura del documento.

---

## 📝 Ficha de aplicación del proyecto

La ficha completa se encuentra en:

📂 [`docs/proyecto.md`](docs/proyecto.md)

### 🔄 Secuencia de interacción

| Elemento | Descripción |
|---|---|
| 👤 Actor | Estudiante interesado en un taller académico |
| 🎯 Tarea | Reservar un lugar en el taller |
| 📋 Dato decisivo | Disponibilidad y estado actual de la reserva |
| 🖱️ Acción principal | Confirmar la reserva |
| ✅ Estado final | Reserva confirmada o cancelada, según la acción realizada |

### 📌 Regla de negocio

El sistema debe impedir que el estudiante confirme una reserva más de una vez mientras esta se encuentre en estado Confirmada.

Después de confirmar, la acción de reserva debe quedar deshabilitada y debe habilitarse la opción de cancelación.

### ✅ Criterio de aceptación

**Dado** que el taller está disponible,

**cuando** el estudiante presiona el botón de reserva,

**entonces** el sistema debe mostrar el estado Confirmada, deshabilitar la confirmación y permitir cancelar la reserva.

Cuando se cancela, el estado debe cambiar a Cancelada y el sistema debe comunicar el resultado.

### 🧠 Decisión HCI

Se prioriza la visibilidad del estado del sistema para que el estudiante pueda identificar si su reserva está disponible, confirmada o cancelada.

Esta decisión se relaciona con la heurística de Nielsen **Visibilidad del estado del sistema**, porque la interfaz debe informar oportunamente el resultado de las acciones realizadas.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Aplicación |
|---|---|
| 🧱 HTML5 | Estructura semántica |
| 🎨 CSS3 | Presentación y diseño adaptable |
| ⚙️ JavaScript | Interacciones y actualización de estados |
| 🌿 Git | Control de versiones |
| 🐙 GitHub | Repositorio, Issues y Pull Requests |
| 🌐 Navegador web | Ejecución y pruebas |
| 🔍 DevTools | Comprobación de tamaños de pantalla |

No se requiere un framework para desarrollar esta fase.

---

## 📂 Estructura del repositorio

```text
APE5-Fase1/
│
├── 📄 README.md
│
├── 📁 docs/
│   └── 📄 proyecto.md
│
├── 📁 src/
│   ├── 🌐 index.html
│   ├── 🎨 estilos.css
│   └── ⚙️ reserva.js
│
└── 📁 evidencias/
    ├── 🖼️ diagnostico-360.png
    ├── 🖼️ movil-360.png
    ├── 🖼️ escritorio-1366.png
    ├── 🖼️ estados-interaccion.png
    └── 📄 revision-pares.md
```

> 📌 Los archivos de evidencias se incorporarán conforme se realicen las pruebas y capturas correspondientes.

### 📄 Descripción de archivos

| Archivo | Función |
|---|---|
| `README.md` | Documentación general del proyecto |
| `docs/proyecto.md` | Diagnóstico, ficha, regla de negocio y criterio de aceptación |
| `src/index.html` | Estructura de la interfaz |
| `src/estilos.css` | Diseño Mobile-First |
| `src/reserva.js` | Control de estados y acciones |
| `evidencias/` | Capturas, pruebas y revisión entre pares |

---

## 📱 Diseño Mobile-First

El diseño Mobile-First consiste en desarrollar primero la interfaz para pantallas pequeñas y posteriormente adaptarla a resoluciones mayores.

### 📲 Vista móvil — 360 px

- Una sola columna.
- Información del taller en primer lugar.
- Panel de reserva debajo de la información principal.
- Botones accesibles.
- Sin desplazamiento horizontal.
- Texto y controles legibles.

### 💻 Vista escritorio — 768 px o superior

- Dos columnas.
- Información del taller en la primera columna.
- Panel de reserva en la segunda columna.
- Distribución con mayor aprovechamiento del espacio.
- Conservación del orden de lectura del HTML.

### 🧩 Punto de corte

```css
@media (min-width: 48rem) {
    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
```

El punto de corte establecido es de **48rem**, equivalente a **768 px** cuando el tamaño base de fuente es de 16 px.

---

## 🧱 Estructura HTML5 semántica

La interfaz debe utilizar etiquetas HTML5 que representen correctamente la organización del contenido.

| Etiqueta | Función |
|---|---|
| `<header>` | Encabezado de Aula Abierta |
| `<main>` | Contenido principal |
| `<section>` | Agrupación de información relacionada |
| `<article>` | Información del taller |
| `<dl>` | Datos descriptivos del taller o reserva |
| `<button>` | Acciones de confirmar y cancelar |
| `<p role="status">` | Comunicación del estado actualizado |

### ♿ Importancia de la semántica

El uso de etiquetas semánticas permite que la interfaz tenga una estructura comprensible y favorece la navegación mediante tecnologías de asistencia.

Además, los botones nativos pueden utilizarse con el teclado sin necesidad de construir controles personalizados.

---

## ⚙️ Interacción y estados

La pantalla debe permitir al estudiante realizar una reserva y cancelarla.

### 🔄 Flujo principal

```text
┌──────────────────────┐
│      DISPONIBLE      │
│   Reservar un lugar  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      CONFIRMADA      │
│  Reserva realizada   │
│  Confirmar bloqueado │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      CANCELADA       │
│   Reserva cancelada  │
└──────────────────────┘
```

### 📋 Estados esperados

| Estado | Mensaje | Acción disponible |
|---|---|---|
| 🟢 Disponible | El taller tiene lugares disponibles | Confirmar reserva |
| 🔵 Confirmada | Tu reserva ha sido confirmada | Cancelar reserva |
| ⚪ Cancelada | Tu reserva ha sido cancelada | Según la regla implementada |

### 🔐 Prevención de duplicados

Al confirmar una reserva, el botón de confirmación debe deshabilitarse mediante la propiedad `disabled`.

De esta manera, se evita que el estudiante ejecute repetidamente la misma acción desde la interfaz.

---

## ♿ Accesibilidad

La interfaz debe permitir completar la tarea utilizando únicamente el teclado.

### ⌨️ Navegación

- **Tab:** desplazarse entre controles disponibles.
- **Shift + Tab:** regresar al control anterior.
- **Enter:** ejecutar un botón enfocado.
- **Espacio:** activar un botón nativo enfocado.

### 🔊 Comunicación del estado

Los cambios se anunciarán mediante una región:

```html
<p role="status" aria-live="polite">
    El taller está disponible.
</p>
```

### 🎯 Gestión del foco

Después de confirmar una reserva, el foco debe trasladarse al botón Cancelar, que pasa a estar disponible.

Esto evita que el usuario permanezca sobre un botón deshabilitado y facilita continuar la interacción.

### 👁️ Foco visible

Los controles deben mostrar una indicación visual cuando reciben el foco mediante teclado.

```css
button:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 3px;
}
```

---

## 🧪 Pruebas y criterios de aceptación

Se realizarán pruebas funcionales para comprobar que la interfaz cumple con los requisitos de la Fase 1.

| ID | Prueba | Resultado esperado |
|---|---|---|
| P01 | Abrir a 360 px | Una columna sin desplazamiento horizontal |
| P02 | Abrir a 768 px | Dos columnas |
| P03 | Abrir a 1366 px | Distribución correcta en escritorio |
| P04 | Navegar con Tab | Acceso a los controles disponibles |
| P05 | Confirmar reserva | Estado Confirmada |
| P06 | Confirmar nuevamente | Acción duplicada bloqueada |
| P07 | Cancelar reserva | Estado Cancelada |
| P08 | Revisar región de estado | Mensaje actualizado |
| P09 | Comprobar foco | Foco trasladado al control disponible |
| P10 | Revisar orden de lectura | Secuencia lógica en móvil y escritorio |


---

## 📸 Evidencias

Las capturas de pantalla deben mostrar el cambio entre el boceto inicial y la interfaz adaptable.

### 🔴 Diagnóstico inicial a 360 px

**Archivo previsto:** `evidencias/diagnostico-360.png`

Debe mostrar el problema de desbordamiento horizontal del boceto original.

### 📱 Interfaz móvil a 360 px

**Archivo previsto:** `evidencias/movil-360.png`

Debe mostrar la interfaz corregida con una sola columna y el panel de reserva accesible.

### 💻 Interfaz de escritorio

**Archivo previsto:** `evidencias/escritorio-1366.png`

Debe mostrar la distribución de dos columnas.

### ⚙️ Estados de interacción

**Archivo previsto:** `evidencias/estados-interaccion.png`

Debe mostrar la respuesta de la interfaz al confirmar o cancelar.



---

## 🤝 Revisión entre pares

La revisión entre compañeros permitirá identificar problemas que no se hayan detectado durante el desarrollo inicial.

### 🔎 Hipótesis propuesta para la Fase 2

**Si el panel de estado se ubica debajo de la información del taller en la vista móvil, el estudiante podrá identificar el resultado de su reserva sin realizar desplazamiento horizontal.**

### 🧪 Validación propuesta

Se solicitará a un participante que complete una reserva utilizando la vista móvil de 360 px.

Se observará:

- Si identifica el botón principal.
- Si comprende el cambio a Confirmada.
- Si encuentra el panel Mi reserva.
- Si necesita desplazamiento horizontal.
- Si puede cancelar la reserva.
- Si completa la tarea utilizando el teclado.

### 📝 Registro

Los hallazgos de la revisión entre pares se documentarán en:

`evidencias/revision-pares.md`

---

## 🚀 Ejecución del proyecto

### 📥 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

Reemplazar `URL_DEL_REPOSITORIO` por el enlace real del repositorio del grupo.

### 📂 2. Ingresar a la carpeta

```bash
cd APE5-Fase1
```

### 🌐 3. Ejecutar

Abrir el archivo:

```text
src/index.html
```

Se puede ejecutar directamente desde un navegador web compatible con HTML5, CSS3 y JavaScript.

### 📱 4. Comprobar la adaptación

1. Abrir las herramientas de desarrollador con `F12`.
2. Activar la vista adaptable.
3. Configurar el ancho en `360 px`.
4. Revisar la distribución de una columna.
5. Cambiar el ancho a `768 px`.
6. Comprobar la distribución de dos columnas.
7. Repetir la revisión a `1366 px`.

### ⌨️ 5. Comprobar las interacciones

1. Utilizar Tab hasta enfocar Confirmar.
2. Presionar Enter.
3. Comprobar el mensaje de confirmación.
4. Verificar que Confirmar quede deshabilitado.
5. Comprobar el foco en Cancelar.
6. Presionar Enter para cancelar.
7. Verificar el estado Cancelada.

---

## 🌿 Gestión de GitHub

El trabajo se organiza mediante Issues, ramas y Pull Requests.

### 📌 Issues

| Issue | Actividad | Rama |
|---|---|---|
| #1 | Diagnóstico y documentación | `feature/ape5-diagnostico` |
| #2 | HTML5 semántico | `feature/ape5-html-semantico` |
| #3 | CSS Mobile-First | `feature/ape5-mobile-first` |
| #4 | Interacción y pruebas | `feature/ape5-interaccion-estados` |



### 📝 Ejemplos de commits

```bash
git add README.md docs/proyecto.md
git commit -m "docs: agregar diagnostico y ficha APE5"
```

```bash
git add src/index.html
git commit -m "feat: implementar estructura HTML5 semantica"
```

```bash
git add src/estilos.css
git commit -m "style: aplicar diseno mobile first"
```

```bash
git add src/reserva.js
git commit -m "feat: implementar estados de reserva accesibles"
```

### 🔄 Pull Requests

Cada integrante debe:

1. Crear su rama.
2. Implementar las actividades de su Issue.
3. Registrar commits descriptivos.
4. Publicar la rama en GitHub.
5. Crear un Pull Request.
6. Solicitar revisión a un compañero.
7. Corregir observaciones cuando corresponda.
8. Integrar los cambios aprobados.

---


## 🏁 Conclusiones

La Fase 1 de la APE 5 permite aplicar los principios de diseño adaptable y accesibilidad a una situación concreta de interacción.

A partir del boceto inicial de Aula Abierta, se identifica la necesidad de reorganizar la información para que los estudiantes puedan consultar el taller y conocer el estado de su reserva desde dispositivos móviles.

La implementación propuesta combina una estructura HTML5 semántica, un diseño CSS Mobile-First y controles JavaScript que comunican los cambios de estado y previenen acciones duplicadas.

La revisión entre pares y las pruebas funcionales permitirán comprobar el resultado de estas decisiones y establecer mejoras para la siguiente fase.

---


