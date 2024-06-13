import React from 'react'
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import BoardMovieSerie from '../BoardMovieSerie/BoardMovieSerie';
import { db } from '../../Services/firebase';
import { collection, addDoc } from "firebase/firestore"; 

const ContentAdmin = () => {

    const AddMovie = async () => {
        const { value: formValues } = await Swal.fire({
            title: 'Ingrese datos a cargar:',
            html:
                '<input id="input1" class="swal2-input" placeholder="Nombre" style="margin: 10px 0; display: inline-block; width: calc(100% - 20px);">' +
                '<select id="input2" class="swal2-input" style="margin: 10px 0; display: inline-block; width: calc(100% - 20px);">' +
                '<option value="" disabled selected>Seleccione un género</option>' +
                '<option value="Acción">Acción</option>' +
                '<option value="Comedia">Comedia</option>' +
                '<option value="Drama">Drama</option>' +
                '<option value="Fantasía">Fantasía</option>' +
                '<option value="Terror">Terror</option>' +
                '<option value="Ciencia ficción">Ciencia ficción</option>' +
                '<option value="Misterio">Misterio</option>' +
                '</select>' +
                '<input id="input3" class="swal2-input" placeholder="Rating" style="margin: 10px 0; display: inline-block; width: calc(100% - 20px);">' +
                '<input id="input4" class="swal2-input" placeholder="Url Video" style="margin: 10px 0; display: inline-block; width: calc(100% - 20px);">' +
                '<input id="input5" class="swal2-input" placeholder="Url Imagen" style="margin: 10px 0; display: inline-block; width: calc(100% - 20px);">' +
                '<select id="input6" class="swal2-input" style="margin: 10px 0; display: inline-block; width: calc(100% - 20px);">' +
                '<option value="" disabled selected>Seleccione tipo</option>' +
                '<option value="Película">Película</option>' +
                '<option value="Serie">Serie</option>' +
                '</select>' +
                '<input id="input7" class="swal2-input" placeholder="Año lanzamiento" style="margin: 10px 0; display: inline-block; width: calc(100% - 20px);">',
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
                const input7 = document.getElementById('input7').value;

                return {
                    nombre: input1,
                    genero: input2,
                    rating: input3,
                    urlVideo: input4,
                    urlImagen: input5,
                    tipo: input6,
                    anioLanzamiento: input7
                };
            }
        });

        if (formValues) {
            try {
                // Save the data to the Firestore collection
                const docRef = await addDoc(collection(db, "peliculas"), formValues);
                console.log("Document written with ID: ", docRef.id);
                Swal.fire('Éxito', 'Película/Serie agregada con éxito', 'success');
            } catch (e) {
                console.error("Error adding document: ", e);
                Swal.fire('Error', 'Hubo un problema al agregar la Película/Serie', 'error');
            }
        }
    };

    return (
        <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button onClick={AddMovie}>Agregar Película / Serie</Button>
            </div>
            <div>
                <BoardMovieSerie />
            </div>
        </div>
    );
}

export default ContentAdmin;