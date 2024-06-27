import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function News({news,user}) {
    const navigate = useNavigate();
    
    return (
        <div style={{display:"flex", justifyContent:"space-around",flexWrap:"wrap"}}>
            {news.map((movie, index) => (
                <Card key={index} style={{ width: '18rem', marginTop:"12px" }}>
                    <Card.Img variant="top" src={movie.urlImagen} style={{ objectFit: 'cover', width: '100%', height: '15rem' }} />
                    <Card.Body>
                        <Card.Title style={{marginTop:"10px"}}>{movie.nombre}</Card.Title>
                        <Card.Subtitle style={{marginTop:"10px"}}>{movie.anioLanzamiento}</Card.Subtitle>
                        <Card.Subtitle style={{marginTop:"10px"}} >{movie.rating && '⭐'.repeat(movie.rating)}</Card.Subtitle>
                        <Button style={{marginTop:"10px"}} variant="primary" disabled={!user} onClick={()=>navigate(`/moviePlayer/${movie.id}`)}>Reproducir</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default News;