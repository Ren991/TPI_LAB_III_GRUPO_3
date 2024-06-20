import News from "../News/News"
import Trends from "../Trends/Trends"
import Image from 'react-bootstrap/Image';
import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";

import { MoviesContext } from "../MovieContext/MovieContext";



function ContentHome() {
  const { movies } = useContext(MoviesContext);

  const [trends, setTrends] = useState([]);
  const [news, setNews] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);



  useEffect(() => {
    if (movies.length > 0) {

      const topRatedMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 4);
      setTrends(topRatedMovies);


      const recentMovies = [...movies].sort((a, b) => b.anioLanzamiento - a.anioLanzamiento).slice(0, 4);
      setNews(recentMovies);
    }
  }, [movies]);
  
  useEffect(() => {
    if (searchMovies.trim() !== "") {
      const filtered = movies.filter(movie => 
        movie.nombre && movie.nombre.toLowerCase().includes(searchMovies.toLowerCase())
      );
      setFilteredMovies(filtered);
      console.log(filteredMovies);
    } else {
      setFilteredMovies([]);
      
    }
  }, [searchMovies, movies]);

  const handleSearchInputChange = (e) => {
    setSearchMovies(e.target.value);
  };


  

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Que ver?</Nav.Link>

              <NavDropdown title="Generos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fantasía</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Comedia</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Terror</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Ciencia Ficción</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Acción</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Misterio</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Películas
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Series</NavDropdown.Item>
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
      
      {searchMovies.trim() === "" ? (
        <>
          <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg" style={{ width: "100%", height: "480px" }} />
          <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
            <h2>Tendencias</h2>
            <Trends trends={trends} />
            <h2>Novedades</h2>
            <News news={news} />
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
                    <Card.Img variant="top" src={movie.urlImagen} />
                    <Card.Body>
                        <Card.Title>{movie.nombre}</Card.Title>
                        <Card.Subtitle>{movie.anioLanzamiento}</Card.Subtitle>
                        <Button variant="primary">Reproducir</Button>
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