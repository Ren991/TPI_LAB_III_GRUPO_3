import News from "../News/News"
import Trends from "../Trends/Trends"
import Image from 'react-bootstrap/Image';



function ContentHome() {

  return (
    <div>
       
      <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg" style={{width:"100%",height:"480px"}} />
      <div style={{width:"80%", marginLeft:"auto", marginRight:"auto"}}>
      
        <h2>Tendencias</h2>
        <Trends/>
        <h2>Novedades</h2>
        <News/>
      </div>

    </div>
    
  )
}

export default ContentHome