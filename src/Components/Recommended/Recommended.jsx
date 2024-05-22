import { Button, Card, Container, Row, Col } from "react-bootstrap";

const movies = [
  {
    title: "Scary Movie 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgSrc: "https://via.placeholder.com/150x100",
  },
  {
    title: "Rápido y furioso 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgSrc: "https://via.placeholder.com/150x100",
  },
  {
    title: "Kung fu panda 3",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgSrc: "https://via.placeholder.com/150x100",
  }
];

function Recommended() {
  return (
    <div
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "15px",
      }}
    >
        <h3>Podrían interesarte</h3>
      <Container>
        <Row>
          {movies.map((movie, index) => (
            <Col key={index} sm={4} md={4} lg={4} className="mb-4">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={movie.imgSrc} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Recommended;
