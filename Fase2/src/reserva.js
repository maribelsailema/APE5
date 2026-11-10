/**
 * reserva.js - Controlador de Estados e Interacción Accesible
 * APE 5 - Fase 2: Validación Semántica y Pruebas con Usuarios
 * Responsable: Wilson (@W1LSONN) | Revisor: Viviana (@maribelsailema)
 */

document.addEventListener('DOMContentLoaded', () => {
    const estadoReserva = document.getElementById('estado-reserva');
    const contenedorAcciones = document.getElementById('contenedor-acciones');

    let estadoActual = 'DISPONIBLE';

    function renderizarBotones() {
        if (!contenedorAcciones) return;

        if (estadoActual === 'CONFIRMADA') {
            estadoReserva.textContent = '¡Reserva confirmada para Interfaces web accesibles!';
            estadoReserva.style.color = '#15803d'; // Verde accesible
            estadoReserva.style.backgroundColor = '#dcfce7';

            contenedorAcciones.innerHTML = `
                <button id="btn-reservar" disabled type="button">Reservado</button>
                <button id="btn-cancelar" class="btn-cancelar" type="button">Cancelar reserva</button>
            `;

            // Traslado accesible de foco por teclado
            const btnCancelar = document.getElementById('btn-cancelar');
            if (btnCancelar) {
                setTimeout(() => btnCancelar.focus(), 50);
                btnCancelar.addEventListener('click', () => {
                    estadoActual = 'CANCELADA';
                    renderizarBotones();
                });
            }

        } else {
            // DISPONIBLE o CANCELADA
            if (estadoActual === 'CANCELADA') {
                estadoReserva.textContent = 'Reserva cancelada. Puedes volver a reservar un lugar.';
                estadoReserva.style.color = '#b91c1c'; // Rojo accesible
                estadoReserva.style.backgroundColor = '#fee2e2';
            } else {
                estadoReserva.textContent = 'Aún no tienes una reserva.';
                estadoReserva.style.color = '#303638';
                estadoReserva.style.backgroundColor = '#f1f5f9';
            }

            contenedorAcciones.innerHTML = `
                <button id="btn-reservar" type="button">Reservar un lugar</button>
            `;

            const btnReservar = document.getElementById('btn-reservar');
            if (btnReservar) {
                if (estadoActual === 'CANCELADA') {
                    setTimeout(() => btnReservar.focus(), 50);
                }
                btnReservar.addEventListener('click', () => {
                    estadoActual = 'CONFIRMADA';
                    renderizarBotones();
                });
            }
        }
    }

    // Inicialización
    renderizarBotones();
});
