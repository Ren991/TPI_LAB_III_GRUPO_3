import { useContext, useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useUser } from "../../Components/AuthContext/AuthContext";
import { MoviesContext } from "../MovieContext/MovieContext";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const ContentFavorites = () => {
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const { user, deleteFavorites } = useUser();
  const { movies } = useContext(MoviesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.favorites) {
      setFavoritesMovies(
        movies.filter((movie) => user.favorites.includes(movie.id))
      );
    }
  }, [user, movies]);

  if (!user) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">cargando...</span>
      </Spinner>
    );
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
        {favoritesMovies && favoritesMovies.length > 0 ? (
          <Row>
            {favoritesMovies.map((movie, index) => (
              <Col key={index} sm={4} md={4} lg={4} className="mb-4">
                <Card style={{ width: "15rem",cursor:"pointer" }} onClick={() => navigate(`/moviePlayer/${movie.id}`)}>
                  <Card.Img
                    variant="top"
                    src={`${movie.urlImagen}`}
                  />
                  <Card.Body>
                    <Card.Title style={{marginTop:"10px"}}>{movie.nombre}</Card.Title>
                    <Card.Subtitle style={{marginTop:"10px"}}>{movie.genero}</Card.Subtitle>
                    <Card.Subtitle style={{marginTop:"10px"}}>{movie.rating && '⭐'.repeat(movie.rating)}</Card.Subtitle>
                    <Button
                    style={{marginTop:"10px"}}
                      variant="danger"
                      onClick={() => deleteFavorites(movie.id)}
                    >
                      Eliminar de favoritos
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Container>
    </div>
  );
};

export default ContentFavorites;
