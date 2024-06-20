import React from 'react';
import { Button, Card } from 'react-bootstrap';

function News({news}) {
    
    return (
        <div style={{display:"flex", justifyContent:"space-around",flexWrap:"wrap"}}>
            {news.map((movie, index) => (
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
    );
}

export default News;