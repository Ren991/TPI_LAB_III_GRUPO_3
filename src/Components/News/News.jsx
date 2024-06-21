import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function News({news}) {
    const navigate = useNavigate();
    
    return (
        <div style={{display:"flex", justifyContent:"space-around",flexWrap:"wrap"}}>
            {news.map((movie, index) => (
                <Card key={index} style={{ width: '18rem', marginTop:"12px" }}>
                    <Card.Img variant="top" src={movie.urlImagen} />
                    <Card.Body>
                        <Card.Title>{movie.nombre}</Card.Title>
                        <Card.Subtitle>{movie.anioLanzamiento}</Card.Subtitle>
                        <Card.Subtitle>{movie.rating && '⭐'.repeat(movie.rating)}</Card.Subtitle>
                        <Button variant="primary" onClick={()=>navigate(`/moviePlayer/${movie.id}`)}>Reproducir</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default News;