import News from "../News/News"
import Trends from "../Trends/Trends"
import Image from 'react-bootstrap/Image';
import React, { useContext, useState,useEffect } from 'react';

import { MoviesContext } from "../MovieContext/MovieContext";



function ContentHome() {
  const { movies } = useContext(MoviesContext);

  const [trends, setTrends] = useState([]);
  const [news, setNews] = useState([]);
  
  

  useEffect(() => {
    if (movies.length > 0) {
        // Ordenar películas por rating en orden descendente y obtener las primeras 4
        const topRatedMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 4);
        setTrends(topRatedMovies);

        // Ordenar películas por fecha de lanzamiento en orden descendente y obtener las más recientes
        const recentMovies =  [...movies].sort((a, b) => b.anioLanzamiento - a.anioLanzamiento).slice(0, 4);
        setNews(recentMovies);
    }
}, [movies]);
console.log(news);
console.log(trends);


  return (
    <div>
       
      <img src="https://static0.srcdn.com/wordpress/wp-content/uploads/2023/11/greatest-movies-of-all-time.jpg" style={{width:"100%",height:"480px"}} />
      <div style={{width:"80%", marginLeft:"auto", marginRight:"auto"}}>
      
        <h2>Tendencias</h2>
        <Trends trends={trends}/>
        <h2>Novedades</h2>
        <News news={news}/>
      </div>

    </div>
    
  )
}

export default ContentHome