/**
 * APE 5 - Fase 1
 * Control de estados de la reserva de talleres de Aula Abierta.
 *
 * Requisitos mínimos del HTML:
 * - Botón de confirmar: data-action="confirmar" (o id="btn-confirmar")
 * - Botón de cancelar: data-action="cancelar" (o id="btn-cancelar")
 * - Mensaje accesible: <p role="status" aria-live="polite" tabindex="-1">
 *   (o id="estado-reserva")
 *
 * Este archivo no depende de librerías externas.
 */
(() => {
  "use strict";

  const botonConfirmar =
    document.querySelector('[data-action="confirmar"]') ||
    document.getElementById("btn-confirmar");

  const botonCancelar =
    document.querySelector('[data-action="cancelar"]') ||
    document.getElementById("btn-cancelar");

  const mensajeEstado =
    document.querySelector('[role="status"]') ||
    document.getElementById("estado-reserva");

  if (!botonConfirmar || !botonCancelar || !mensajeEstado) {
    console.error(
      "Reserva: faltan elementos. Se requieren los botones confirmar/cancelar " +
      "y una región role=\"status\"."
    );
    return;
  }

  const ESTADOS = Object.freeze({
    DISPONIBLE: "Disponible",
    CONFIRMADA: "Confirmada",
    CANCELADA: "Cancelada"
  });

  let estadoActual = ESTADOS.DISPONIBLE;

  function anunciar(mensaje) {
    // Limpiar primero permite que lectores de pantalla anuncien mensajes repetidos.
    mensajeEstado.textContent = "";
    window.requestAnimationFrame(() => {
      mensajeEstado.textContent = mensaje;
    });
  }

  function renderizarEstado(mensaje) {
    mensajeEstado.dataset.estado = estadoActual.toLowerCase();
    botonConfirmar.dataset.estado = estadoActual.toLowerCase();
    botonCancelar.dataset.estado = estadoActual.toLowerCase();

    if (estadoActual === ESTADOS.DISPONIBLE) {
      botonConfirmar.disabled = false;
      botonConfirmar.textContent = "Confirmar reserva";
      botonCancelar.disabled = true;
      botonCancelar.textContent = "Cancelar reserva";
    } else if (estadoActual === ESTADOS.CONFIRMADA) {
      botonConfirmar.disabled = true;
      botonCancelar.disabled = false;
      botonCancelar.textContent = "Cancelar reserva";
    } else {
      // La reserva cancelada no puede volver a confirmarse accidentalmente.
      // Se ofrece iniciar una nueva reserva mediante el mismo control.
      botonConfirmar.disabled = false;
      botonConfirmar.textContent = "Nueva reserva";
      botonCancelar.disabled = true;
    }

    anunciar(mensaje);
  }

  function confirmarReserva() {
    if (estadoActual === ESTADOS.DISPONIBLE) {
      estadoActual = ESTADOS.CONFIRMADA;
      renderizarEstado("Reserva confirmada. Ya puedes cancelar la reserva si lo necesitas.");
      botonCancelar.focus();
      return;
    }

    if (estadoActual === ESTADOS.CANCELADA) {
      estadoActual = ESTADOS.DISPONIBLE;
      renderizarEstado("Nueva reserva disponible. Puedes confirmar cuando estés listo.");
      botonConfirmar.focus();
    }
  }

  function cancelarReserva() {
    // La comprobación lógica evita ejecutar la acción aunque se dispare
    // artificialmente un evento sobre un botón deshabilitado.
    if (estadoActual !== ESTADOS.CONFIRMADA || botonCancelar.disabled) {
      return;
    }

    estadoActual = ESTADOS.CANCELADA;
    renderizarEstado("Reserva cancelada. Puedes iniciar una nueva reserva.");
    botonConfirmar.focus();
  }

  // Estado inicial determinista, independientemente de los atributos del HTML.
  renderizarEstado("Estado de la reserva: Disponible.");
  botonConfirmar.addEventListener("click", confirmarReserva);
  botonCancelar.addEventListener("click", cancelarReserva);
})();
