import News from "../News/News"
import Trends from "../Trends/Trends"
import Image from 'react-bootstrap/Image';
import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, Card } from "react-bootstrap";
import { useUser } from "../../Components/AuthContext/AuthContext";

import Swal from "sweetalert2";

import { MoviesContext } from "../MovieContext/MovieContext";
import { useNavigate } from "react-router-dom";



function ContentHome() {
  const { movies } = useContext(MoviesContext);
  const { user } = useUser();

  const [trends, setTrends] = useState([]);
  const [news, setNews] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    if (movies.length > 0) {

      const topRatedMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 4);
      setTrends(topRatedMovies);


      const recentMovies = [...movies].sort((a, b) => b.anioLanzamiento - a.anioLanzamiento).slice(0, 4);
      setNews(recentMovies);
    }
  }, [movies]);
  
  useEffect(() => {
    let filtered = movies;

    if (searchMovies.trim() !== "") {
      filtered = filtered.filter(movie =>
        movie.nombre && movie.nombre.toLowerCase().includes(searchMovies.toLowerCase())
      );
    }

    if (selectedGenre !== "") {
      if(selectedGenre !== "Película" && selectedGenre !== "Serie")
      filtered = filtered.filter(movie =>
        movie.genero && movie.genero.toLowerCase() === selectedGenre.toLowerCase()
      )
      else if(selectedGenre === "Película" || selectedGenre === "Serie"){
        console.log(selectedGenre);
        filtered = filtered.filter(movie =>
          movie.tipo && movie.tipo.toLowerCase() === selectedGenre.toLowerCase()
        )

      }
    }

    setFilteredMovies(filtered);
  }, [searchMovies, selectedGenre, movies]);
  
  
  
  const handleSearchInputChange = (e) => {
    setSearchMovies(e.target.value);
  };


  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const randomMovie = () => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      navigate(`/moviePlayer/${randomMovie.id}`);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={randomMovie}>Que ver?</Nav.Link>

              <NavDropdown title="Generos" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleGenreSelect("")}>Volver</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect("Drama")}>Drama</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect("Fantasía")}>Fantasía</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect("Comedia")}>Comedia</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect("Terror")}>Terror</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect("Ciencia Ficción")}>Ciencia Ficción</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect("Acción")}>Acción</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect("Misterio")}>Misterio</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleGenreSelect("Película")}>Películas</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleGenreSelect("Serie")}>Series</NavDropdown.Item>
              </NavDropdown>
              <Form className="d-flex me-auto">
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleSearchInputChange}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {searchMovies.trim() === ""  && selectedGenre === "" ? (
        <>
          <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg" style={{ width: "100%", height: "480px" }} />
          <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
            <h2>Tendencias</h2>
            <Trends trends={trends} user={user} />
            <h2>Novedades</h2>
            <News news={news} user={user} />
          </div>
        </>
      ) : (
        <>
          {filteredMovies.length > 0 ? (
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
              <h2>Resultados de búsqueda</h2>
              <div style={{display:"flex", justifyContent:"space-around",flexWrap:"wrap"}}>
              {filteredMovies.map((movie, index) => (
                <Card key={index} style={{ width: '18rem', marginTop:"12px" }}>
                    <Card.Img variant="top" src={movie.urlImagen} style={{ objectFit: 'cover', width: '100%', height: '15rem' }}/>
                    <Card.Body>
                        <Card.Title style={{marginTop:"10px"}}>{movie.nombre}</Card.Title>
                        <Card.Subtitle style={{marginTop:"10px"}}>{movie.anioLanzamiento}</Card.Subtitle>
                        <Card.Subtitle style={{marginTop:"10px"}}>{movie.rating && '⭐'.repeat(movie.rating)}</Card.Subtitle>

                        <Button  style={{marginTop:"15px"}} variant="primary" disabled={!user}  onClick={() =>  navigate(`/moviePlayer/${movie.id}`)}>Reproducir</Button>
                    </Card.Body>
                </Card>
            ))}
              </div>
            </div>
          ) : (
            <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
              <h2>No se encontraron resultados</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
}

      

  

  


export default ContentHome