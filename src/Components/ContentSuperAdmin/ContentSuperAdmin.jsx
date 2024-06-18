import React from 'react'
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import BoardMovieSerie from '../BoardMovieSerie/BoardMovieSerie';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../Services/firebase';
import { useNavigate } from "react-router-dom";


const ContentSuperAdmin = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const AddMovie = () => {
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
                console.log('Valores ingresados:', input1, input2, input3, input4, input5, input6);
            }
        });
    };

    const AddAdmin = () => {
        Swal.fire({
            title: 'Ingrese admin nuevo:',
            html:
                '<input id="input1" class="swal2-input" placeholder="Email">' +
                '<input id="input2" class="swal2-input" placeholder="Username">'+
                '<input id="input3" class="swal2-input" placeholder="Contraseña">',
                
            
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            cancelButtonText: 'Cancelar',
            preConfirm: async() => {
                // Obtener los valores de los inputs
                const input1 = document.getElementById('input1').value;
                const input2 = document.getElementById('input2').value;
                const input3 = document.getElementById('input3').value;
                
                
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, input1, input3);
                    console.log(userCredential);
                    const user = userCredential.user;
                    console.log(user);
                    const userDocRef = doc(db, 'users', user.uid);
                    await setDoc(userDocRef, {
                        email: input1,
                        role: 'admin',
                        username: input2,
                        favorites: [] //para guardar los favoritos.
                    });
        
                    console.log('User signed up and role set:', user);
                    navigate(("/signin"));
                } catch (error) {
                    console.error('Error signing up:', error);
                    
                    Swal.fire({
                        title: 'Error!',
                        text: 'Error al registrar un admin, intentente nuevamente.',
                        icon: 'error',
                        confirmButtonText: 'Salir'
                    })
                }

                // Aquí puedes hacer algo con los valores ingresados, por ejemplo, enviarlos a una función de manejo
                console.log('Valores ingresados:', input1, input2);
            }


        });
    };

    const RemoveAdmin = () => {
        Swal.fire({
            title: 'Ingrese nombre:',
            html:
                '<input id="input1" class="swal2-input" placeholder="Admin a eliminar">',
              
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                // Obtener los valores de los inputs
                const input1 = document.getElementById('input1').value;


                // Aquí puedes hacer algo con los valores ingresados, por ejemplo, enviarlos a una función de manejo
                console.log('Valores ingresados:', input1);
            }
        });
    };



    return (
        <div style={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}>
            
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {/* <Button onClick={AddMovie}>Agregar Película / Serie</Button> */}
                <Button onClick={AddAdmin}>Agregar Admin</Button>
                <Button onClick={RemoveAdmin}>Eliminar Admin</Button>
            </div>
            <div>
                <BoardMovieSerie/>
            </div>
        </div>
    );
}

export default ContentSuperAdmin