import React from 'react';
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2';

const movies = [
    {
        title: "Scary Movie 1",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://via.placeholder.com/150x100",
    },
    {
        title: "Rápido y furioso 2",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://via.placeholder.com/150x100",
    },
    {
        title: "Kung fu panda 3",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://via.placeholder.com/150x100",
    },
    {
        title: "Scary Movie 1",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://via.placeholder.com/150x100",
    },
    {
        title: "Rápido y furioso 2",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://via.placeholder.com/150x100",
    },
    {
        title: "Kung fu panda 3",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://via.placeholder.com/150x100",
    },
    {
        title: "Scary Movie 1",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://via.placeholder.com/150x100",
    },
    {
        title: "Rápido y furioso 2",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://via.placeholder.com/150x100",
    }
    
];


const BoardMovieSerie = () => {
    const editMovie = () => {
        Swal.fire({
            title: 'Editar datos:',
            html:
                '<input id="input1" class="swal2-input" placeholder="Nombre">' +
                '<input id="input2" class="swal2-input" placeholder="Género">' +
                '<input id="input3" class="swal2-input" placeholder="Rating">' +
                '<input id="input4" class="swal2-input" placeholder="Url">' +
                '<input id="input5" class="swal2-input" placeholder="Peli/Serie">' +
                '<input id="input6" class="swal2-input" placeholder="Año lanzamiento">',
            showCancelButton: true,
            confirmButtonText: 'Editar',
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
    }

  return (
    <div
            style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "15px",
            }}
        >
            <h3>Favoritos</h3>
            <Container>
                <Row>
                    {movies.map((movie, index) => (
                        <Col key={index} sm={4} md={4} lg={4} className="mb-4">
                            <Card style={{ width: "15rem" }}>
                                <Card.Img variant="top" src={movie.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Button variant="primary" onClick={editMovie}>Editar</Button>
                                    <Button variant="secondary">Eliminar</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
  )
}

export default BoardMovieSerie