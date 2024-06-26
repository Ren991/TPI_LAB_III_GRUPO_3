import { useEffect, useState, useContext } from 'react';
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2';
import { db } from '../../Services/firebase';
import { collection, getDocs,doc,updateDoc, deleteDoc,addDoc } from "firebase/firestore";
import { MoviesContext } from "../MovieContext/MovieContext";
import useSwalAlert from '../../hooks/useSwalAlert';


const BoardMovieSerie = () => {
    const { fetchMovies, movies } = useContext(MoviesContext);
    const [movieName, setMovieName] = useState('');
    const { showAlert } = useSwalAlert();

    const getYouTubeEmbedUrl = (url) => {
        const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|watch\?v\=|watch\?.+\&v\=)([^#\&\?]*).*/;
        const match = url.match(regex);
        return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

    

    const editMovie = (movie) => {
        Swal.fire({
            title: 'Editar datos:',
            html:
                `<label>Nombre:</label>
                <input id="input1" class="swal2-input" placeholder="Nombre" value="${movie.nombre}">` +                
                `<label>Genero:</label>
                <input id="input2" class="swal2-input" placeholder="Género" value="${movie.genero}">` +
                `<label>Rating:</label>
                <input id="input3" class="swal2-input" placeholder="Rating" value="${movie.rating}">` +
                `<label>Video:</label>
                <input id="input4" class="swal2-input" placeholder="Url Video" value="${movie.urlVideo}">` +
                `<label>Imagen:</label>
                <input id="input5" class="swal2-input" placeholder="Url Imagen" value="${movie.urlImagen}">` +
                `<label>Tipo:</label>
                <input id="input6" class="swal2-input" placeholder="Peli/Serie" value="${movie.tipo}">` +
                `<label>Fecha:</label>
                <input id="input7" class="swal2-input" placeholder="Año lanzamiento" value="${movie.anioLanzamiento}">`,
            showCancelButton: true,
            confirmButtonText: 'Editar',
            cancelButtonText: 'Cancelar',
            preConfirm: async () => {
                const input1 = document.getElementById('input1').value;
                const input2 = document.getElementById('input2').value;
                const input3 = document.getElementById('input3').value;
                const input4 = document.getElementById('input4').value;
                const input5 = document.getElementById('input5').value;
                const input6 = document.getElementById('input6').value;
                const input7 = document.getElementById('input7').value;

                const videoUrl = getYouTubeEmbedUrl(input4);

                const nuevosValores = {
                    anioLanzamiento: input7,
                    genero:input2,
                    nombre:input1,
                    rating:input3,
                    tipo:input6,
                    urlImagen:input5,
                    urlVideo: videoUrl
                }
                try {
                    const userDoc = doc(db, 'peliculas', movie.id);
                    await updateDoc(userDoc, nuevosValores );                    
                    showAlert('Película/Serie editada con éxito', 'success'); 
                    fetchMovies();
                } catch (e) {
                    showAlert('Hubo un problema al editar la Película/Serie', 'error');
                }

            }
        });
    };

    const deleteMovie = async(movie)=>{
        Swal.fire({
            title: "Estas seguro?",            
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!"
          }).then(async () => {
            try {
                const userDoc = doc(db, 'peliculas', movie.id);
                await deleteDoc(userDoc, movie.nombre );                    
                showAlert('Película/Serie eliminada con éxito', 'success');
                fetchMovies();
                
            } catch (e) {
                showAlert('Hubo un problema al eliminar la Película/Serie', 'error');
            }
          });
        
    }

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

                const videoUrl = getYouTubeEmbedUrl(input4);

                return {
                    nombre: input1,
                    genero: input2,
                    rating: input3,
                    urlVideo: videoUrl,
                    urlImagen: input5,
                    tipo: input6,
                    anioLanzamiento: input7
                };
            }
        });

        if (formValues) {
            try {
                const docRef = await addDoc(collection(db, "peliculas"), formValues);
                console.log("Document written with ID: ", docRef.id);
                showAlert('Película/Serie agregada con éxito', 'success');

                fetchMovies();
            } catch (e) {
                showAlert('Hubo un problema al agregar la Película/Serie', 'error');
            }
        }
    };


    return (
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }}>
            <div style={{ display: 'flex', justifyContent: 'space-around',marginBottom:"15px" }}>
                <Button onClick={AddMovie}>Agregar Película / Serie</Button>
            </div>
            <Container>
                <Row>
                    {movies.map((movie, index) => (
                        <Col key={index} sm={4} md={4} lg={4} className="mb-4">
                            <Card style={{ width: "15rem" }}>
                                <Card.Img variant="top" src={movie.urlImagen} style={{ objectFit: 'cover', width: '100%', height: '15rem' }}/>
                                <Card.Body>
                                    <Card.Title>{movie.nombre}</Card.Title>
                                    <Button variant="primary" onClick={() => editMovie(movie)}>Editar</Button>
                                    <Button variant="secondary" onClick={()=> deleteMovie(movie)}>Eliminar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default BoardMovieSerie;