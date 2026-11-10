/**
 * APE 5 - Fase 2 | Aula Abierta
 * Ciclo: DISPONIBLE -> CONFIRMADA -> CANCELADA
 * Interacción mediante botones nativos (ratón, Tab y Enter).
 */
document.addEventListener('DOMContentLoaded', () => {
  const acciones = document.getElementById('contenedor-acciones');
  const estadoTexto = document.getElementById('estado-reserva');
  const estadoEtiqueta = document.getElementById('valor-estado');

  if (!acciones || !estadoTexto || !estadoEtiqueta) {
    console.error('No se encontraron los elementos necesarios para controlar la reserva.');
    return;
  }

  let estadoActual = 'DISPONIBLE';

  const mensajes = {
    DISPONIBLE: 'La reserva está disponible. Puedes reservar tu lugar.',
    CONFIRMADA: 'Tu reserva para Interfaces web accesibles ha sido confirmada.',
    CANCELADA: 'La reserva ha sido cancelada. Puedes realizar una nueva reserva.'
  };

  function renderizar({ moverFoco = false } = {}) {
    estadoEtiqueta.textContent =
      estadoActual.charAt(0) + estadoActual.slice(1).toLowerCase();
    estadoTexto.textContent = mensajes[estadoActual];

    if (estadoActual === 'CONFIRMADA') {
      acciones.innerHTML = `
        <button id="btn-reservar" type="button" disabled aria-disabled="true">
          Reserva confirmada
        </button>
        <button id="btn-cancelar" class="btn-cancelar" type="button">
          Cancelar reserva
        </button>`;
    } else if (estadoActual === 'CANCELADA') {
      acciones.innerHTML = `
        <button id="btn-reservar" type="button">
          Reservar nuevamente
        </button>
        <button id="btn-cancelar" class="btn-cancelar" type="button" disabled aria-disabled="true">
          Cancelar reserva
        </button>`;
    } else {
      acciones.innerHTML = `
        <button id="btn-reservar" type="button">Reservar un lugar</button>
        <button id="btn-cancelar" class="btn-cancelar" type="button" disabled aria-disabled="true">
          Cancelar reserva
        </button>`;
    }

    if (moverFoco) {
      const destino = estadoActual === 'CONFIRMADA'
        ? document.getElementById('btn-cancelar')
        : document.getElementById('btn-reservar');
      destino?.focus();
    }
  }

  function confirmarReserva() {
    // La validación del estado protege también frente a eventos repetidos.
    if (estadoActual !== 'DISPONIBLE') return;
    estadoActual = 'CONFIRMADA';
    renderizar({ moverFoco: true });
  }

  function cancelarReserva() {
    if (estadoActual !== 'CONFIRMADA') return;
    estadoActual = 'CANCELADA';
    renderizar({ moverFoco: true });
  }

  function nuevaReserva() {
    if (estadoActual !== 'CANCELADA') return;
    estadoActual = 'DISPONIBLE';
    renderizar({ moverFoco: true });
  }

  // Delegación: los botones se reconstruyen al cambiar de estado.
  acciones.addEventListener('click', (event) => {
    const boton = event.target.closest('button');
    if (!boton || boton.disabled) return;
    if (boton.id === 'btn-reservar') {
      estadoActual === 'CANCELADA' ? nuevaReserva() : confirmarReserva();
    } else if (boton.id === 'btn-cancelar') {
      cancelarReserva();
    }
  });

  renderizar();
});
