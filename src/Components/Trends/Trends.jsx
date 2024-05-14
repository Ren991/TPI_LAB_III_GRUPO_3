
import Carousel from 'react-bootstrap/Carousel';


function Trends() {


    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://bmsvieira.github.io/moovie.js/demo-template/images/moovie_black.png"
                        alt="New Carousel Image"
                    />
                    <Carousel.Caption>
                    <h3 style={{color:"black"}}>Interestelar</h3>
                        <p>Slide Description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://bmsvieira.github.io/moovie.js/demo-template/images/moovie_black.png"
                        alt="New Carousel Image"
                    />
                    <Carousel.Caption>
                        <h3 style={{color:"black"}}>Shreek 2</h3>
                        <p>Slide Description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://bmsvieira.github.io/moovie.js/demo-template/images/moovie_black.png"
                        alt="New Carousel Image"
                    />
                    <Carousel.Caption>
                    <h3 style={{color:"black"}}>Spriderman 2</h3>
                        <p>Slide Description</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Trends
