import React from 'react'
import Swal from 'sweetalert2';

const ContentSuperAdmin = () => {

    const mostrarDialogo = () => {
        Swal.fire({
            title: 'Ingrese datos a cargar:',
            html:
                '<input id="input1" class="swal2-input" placeholder="Nombre">' +
                '<input id="input2" class="swal2-input" placeholder="Género">' +
                '<input id="input3" class="swal2-input" placeholder="Rating">' +
                '<input id="input4" class="swal2-input" placeholder="Url">' +
                '<input id="input5" class="swal2-input" placeholder="Peli/Serie">' +
                '<input id="input6" class="swal2-input" placeholder="Año lanzamiento">',
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                // Obtener los valores de los inputs
                const input1 = document.getElementById('input1').value;
                const input2 = document.getElementById('input2').value;
                const input3 = document.getElementById('input3').value;
                const input4 = document.getElementById('input4').value;
                const input5 = document.getElementById('input5').value;
                const input6 = document.getElementById('input6').value;

                // Aquí puedes hacer algo con los valores ingresados, por ejemplo, enviarlos a una función de manejo
                console.log('Valores ingresados:', input1, input2, input3, input4);
            }
        });
    };

    return (
        <div>
            <button onClick={mostrarDialogo}>Mostrar cuadro de diálogo</button>
        </div>
    );
}

export default ContentSuperAdmin