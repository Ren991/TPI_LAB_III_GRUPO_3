import NavBarPage from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import { useContext } from "react";
import { useUser } from "../../Components/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

function MoviePlayer() {
  const { user } = useUser();
  console.log(user)
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(user);
    if (!user) {
      Swal.fire('Error', 'Debe iniciar sesión para reproducir la pelicula/serie', 'error');
      navigate("/home")
    }
    console.log(user);
  }, [user]);  

  return (
    <div>
        <NavBarPage/>
        <VideoPlayer/>    
        <Footer/>      
    </div>
    
  )
}

export default MoviePlayer