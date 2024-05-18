import React from 'react'
import Swal from 'sweetalert2';

const ContentSuperAdmin = () => {

    const mostrarDialogo = () => {
        Swal.fire({
            title: 'Ingrese un valor:',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            cancelButtonText: 'Cancelar',
            preConfirm: (valor) => {
                // Aquí puedes hacer algo con el valor ingresado, por ejemplo, enviarlo a una función de manejo
                console.log('Valor ingresado:', valor);
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