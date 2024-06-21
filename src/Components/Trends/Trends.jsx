
import Carousel from 'react-bootstrap/Carousel';


function Trends({trends}) {


    return (
        <>
            <Carousel>
            {trends && trends.map((movie) => (
                    <Carousel.Item key={movie.id} style={{cursor:"pointer"}}>
                        <img
                            style={{height:590,objectFit:"fit"}}
                            className="d-block w-100"
                            src={movie.urlImagen || 'https://via.placeholder.com/800x400'}
                            alt={`Image of ${movie.nombre}`}
                        />
                        <Carousel.Caption>
                            <h3 style={{color: "white"}}>{movie.nombre}</h3>
                            <p style={{fontSize:"25px",backgroundColor:"black",borderRadius:"0.5rem"}}>{movie.genero || '-'}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default Trends
