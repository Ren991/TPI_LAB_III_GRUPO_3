import React from 'react';
import { Button, Card } from 'react-bootstrap';

function News() {
    const movies = [
        {
            title: "Interstellar",
            imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg"
        },
        {
            title: "The Shawshank Redemption",
            imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg"
        },
        {
            title: "Inception",
            imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg"
        },
        {
            title: "The Dark Knight",
            imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/79194981293eabf6620ece96eb5a9c1fffa04d3374ae12986e0748800b37b9cf.jpg"
        }
    ];

    return (
        <div style={{display:"flex", justifyContent:"space-around",flexWrap:"wrap"}}>
            {movies.map((movie, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.imageUrl} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                       
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default News;