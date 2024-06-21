import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { MoviesContext } from "../MovieContext/MovieContext";
import { useContext } from "react";


function VideoPlayer() {
  const {id} = useParams();
  const { movies } = useContext(MoviesContext);
  const movie = movies.find(movie => movie.id === id);

  if (!movie) {
    return <div>Película no encontrada</div>;
  }
  console.log(movie);

  console.log(movie.urlVideo);
 
  return (
    <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <div style={{ marginTop: "25px" }}>
        <h2>{movie.title}</h2>
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
    </div>
  );
}

export default VideoPlayer;