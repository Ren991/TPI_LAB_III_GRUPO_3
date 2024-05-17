import { Button } from "react-bootstrap"




function VideoPlayer() {

  return (
    <div style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}>
        <div style={{marginTop:"25px"}}>
            <h2>Titulo Película</h2>
            <iframe width="100%" height="415" src="https://www.youtube.com/embed/vBdco69DSCA?si=nsI8apDp4Hw8GvUJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Button>Añadir a favoritos</Button>
        </div>     
    </div>
    
  )
}

export default VideoPlayer