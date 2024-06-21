import { useParams, useNavigate } from "react-router-dom"
import { MoviesContext } from "../MovieContext/MovieContext";
import { useContext, useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, Card, Row, Col } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';



function VideoPlayer() {
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);
  const movie = movies.find(movie => movie.id === id);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (movie) {
      const recommendations = movies.filter(m =>
        m.genero.toLowerCase() === movie.genero.toLowerCase() && m.id !== movie.id
      );
      setRecommendedMovies(recommendations);
    }
  }, [movie, movies]);


  if (!movie) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }




  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <div style={{ marginTop: "25px" }}>
        <h2>{movie.nombre}</h2>
        <iframe
          width="100%"
          height="415"
          src={movie.urlVideo} // Usa la URL del video de la película encontrada
          title={movie.nombre}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Button>Añadir a favoritos</Button>
      </div>
      <div
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "15px",
        }}
      >
        <h3>{recommendedMovies.length > 0 && "Podrían interesarte"}</h3>
        <Container>
          <Row>
            {recommendedMovies.map((recommendedMovie, index) => (
              <Col key={index} sm={4} md={4} lg={4} className="mb-4">
                <Card style={{ width: "15rem" }}>
                  <Card.Img variant="top" src={recommendedMovie.urlImagen} />
                  <Card.Body>
                    <Card.Title>{recommendedMovie.nombre}</Card.Title>
                    <Button variant="primary" onClick={() => navigate(`/moviePlayer/${recommendedMovie.id}`)}>Ver</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default VideoPlayer;