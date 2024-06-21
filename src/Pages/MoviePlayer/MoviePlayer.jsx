import NavBarPage from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer"

import { AuthContext } from "../../Components/Context/AuthContext"

function MoviePlayer() {
 /*  const { isSignedIn } = useContext(AuthContext);
  console.log(isSignedIn) */
  return (
    <div>
        <NavBarPage/>
        <VideoPlayer/>    
        <Footer/>      
    </div>
    
  )
}

export default MoviePlayer