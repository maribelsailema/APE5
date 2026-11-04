/**
 * APE 5 - Fase 1: Control de Estados de Interacción
 * Gestión del ciclo de vida de la reserva: Disponible -> Confirmada -> Cancelada
 */

document.addEventListener('DOMContentLoaded', () => {
    const btnReservar = document.getElementById('btn-reservar');
    const estadoReserva = document.getElementById('estado-reserva');
    const contenedorAcciones = document.getElementById('contenedor-acciones');

    // Estado 1: Disponible (Estado inicial)
    let estadoActual = 'DISPONIBLE';

    function actualizarInterfaz() {
        if (estadoActual === 'CONFIRMADA') {
            // Cambiar anuncio de estado accesible
            estadoReserva.textContent = '¡Reserva confirmada para Interfaces web accesibles!';
            estadoReserva.style.color = '#38b640';

            // Actualizar botones y transferir foco dinámicamente
            contenedorAcciones.innerHTML = `
                <button id="btn-reservar" disabled type="button">Reservado</button>
                <button id="btn-cancelar" class="btn-cancelar" type="button">Cancelar reserva</button>
            `;

            // Mover el foco automáticamente al botón disponible (Cancelar)
            const btnCancelar = document.getElementById('btn-cancelar');
            btnCancelar.focus();

            btnCancelar.addEventListener('click', cancelarReserva);

        } else if (estadoActual === 'CANCELADA' || estadoActual === 'DISPONIBLE') {
            // Cambiar anuncio de estado accesible
            estadoReserva.textContent = 'Aún no tienes una reserva.';
            estadoReserva.style.color = '#303638';

            // Restaurar botón de reserva
            contenedorAcciones.innerHTML = `
                <button id="btn-reservar" type="button">Reservar un lugar</button>
            `;

            // Mover el foco automáticamente al botón disponible (Reservar)
            const nuevoBtnReservar = document.getElementById('btn-reservar');
            nuevoBtnReservar.focus();

            nuevoBtnReservar.addEventListener('click', confirmarReserva);
        }
    }

    function confirmarReserva() {
        estadoActual = 'CONFIRMADA';
        actualizarInterfaz();
    }

    function cancelarReserva() {
        estadoActual = 'CANCELADA';
        actualizarInterfaz();
    }

    // Event listener inicial
    if (btnReservar) {
        btnReservar.addEventListener('click', confirmarReserva);
    }
});