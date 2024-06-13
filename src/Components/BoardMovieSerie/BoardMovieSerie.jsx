import { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2';
import { db } from '../../Services/firebase';
import { collection, getDocs } from "firebase/firestore";

const BoardMovieSerie = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "peliculas"));
            const moviesList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMovies(moviesList);
            
        } catch (error) {
            console.error("Error fetching movies: ", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const editMovie = (movie) => {
        Swal.fire({
            title: 'Editar datos:',
            html:
                `<input id="input1" class="swal2-input" placeholder="Nombre" value="${movie.title}">` +
                `<input id="input2" class="swal2-input" placeholder="Género" value="${movie.genre}">` +
                `<input id="input3" class="swal2-input" placeholder="Rating" value="${movie.rating}">` +
                `<input id="input4" class="swal2-input" placeholder="Url Video" value="${movie.urlVideo}">` +
                `<input id="input5" class="swal2-input" placeholder="Url Imagen" value="${movie.imgSrc}">` +
                `<input id="input6" class="swal2-input" placeholder="Peli/Serie" value="${movie.type}">` +
                `<input id="input7" class="swal2-input" placeholder="Año lanzamiento" value="${movie.releaseYear}">`,
            showCancelButton: true,
            confirmButtonText: 'Editar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const input1 = document.getElementById('input1').value;
                const input2 = document.getElementById('input2').value;
                const input3 = document.getElementById('input3').value;
                const input4 = document.getElementById('input4').value;
                const input5 = document.getElementById('input5').value;
                const input6 = document.getElementById('input6').value;
                const input7 = document.getElementById('input7').value;

                console.log('Valores ingresados:', input1, input2, input3, input4, input5, input6, input7);
            }
        });
    };

    return (
        <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "15px" }}>
            <Container>
                <Row>
                    {movies.map((movie, index) => (
                        <Col key={index} sm={4} md={4} lg={4} className="mb-4">
                            <Card style={{ width: "15rem" }}>
                                <Card.Img variant="top" src={movie.urlImagen} />
                                <Card.Body>
                                    <Card.Title>{movie.nombre}</Card.Title>
                                    <Button variant="primary" onClick={() => editMovie(movie)}>Editar</Button>
                                    <Button variant="secondary">Eliminar</Button>
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