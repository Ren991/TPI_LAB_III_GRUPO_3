import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import BoardMovieSerie from '../BoardMovieSerie/BoardMovieSerie';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc, getFirestore, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../../Services/firebase';
import { useNavigate } from "react-router-dom";

const ContentSuperAdmin = () => {
    const [admins, setAdmins] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAdminUsers();
    }, []);

    const fetchAdminUsers = async () => {
        const adminsCollection = collection(db, 'users');
        const q = query(adminsCollection, where("role", "==", "admin"));
        try {
            const querySnapshot = await getDocs(q);
            const adminList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAdmins(adminList);
        } catch (error) {
            console.error("Error fetching admin users:", error);
        }
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
                        favorites: [] 
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
    
                
                console.log('Valores ingresados:', input1, input2);
            }
    
    
        });
    };

    const RemoveAdmin = () => {
        Swal.fire({
            title: 'Lista de Admins',
            html: createAdminTable(),
            showCancelButton: true,
            cancelButtonText: 'Cerrar',
            showConfirmButton: false
        });
    };

    const createAdminTable = () => {
        let tableHtml = '<table class="table"><thead><tr><th>Email</th><th>UID</th><th>Acción</th></tr></thead><tbody>';
        admins.forEach(admin => {
            tableHtml += `<tr>
                <td>${admin.email}</td>
                <td>${admin.id}</td>
                <td><button class="btn btn-danger" onclick="deleteAdmin('${admin.id}')">Eliminar</button></td>
            </tr>`;
        });
        tableHtml += '</tbody></table>';
        return tableHtml;
    };

    window.deleteAdmin = async (uid) => {
        const confirmation = await Swal.fire({
            title: "Estas seguro?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!"
        });

        if (confirmation.isConfirmed) {
            try {
                await deleteUserFromAuth(uid);
                await deleteUserFromFirestore(uid);
                fetchAdminUsers(); // Actualizar la lista de admins después de eliminar uno
                Swal.fire('Eliminado!', 'El admin ha sido eliminado.', 'success');
            } catch (error) {
                console.error('Error in user deletion process:', error);
                Swal.fire('Error', 'Hubo un problema al eliminar el admin.', 'error');
            }
        }
    };

    const deleteUserFromAuth = async (uid) => {
        try {
           // verificar permisos para eliminar del servicio de autenticación
        } catch (error) {
            console.error('Error deleting user from auth:', error);
        }
    };

    const deleteUserFromFirestore = async (uid) => {
        try {
            const userDocRef = doc(db, 'users', uid);
            await deleteDoc(userDocRef);
            console.log('Successfully deleted user document with uid: ${uid}');
        } catch (error) {
            console.error('Error deleting user from Firestore:', error);
        }
    };

    return (
        <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button onClick={AddAdmin}>Agregar Admin</Button>
                <Button onClick={RemoveAdmin}>Eliminar Admin</Button>
            </div>
            <div>
                <BoardMovieSerie />
            </div>
           
        </div>
    );
}

export default ContentSuperAdmin;


