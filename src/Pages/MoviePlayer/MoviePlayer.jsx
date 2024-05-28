import NavBarPage from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer"
import Recommended from "../../Components/Recommended/Recommended"


function MoviePlayer({isSignedIn}) {

  console.log(isSignedIn)
  return (
    <div>
        <NavBarPage/>
        <VideoPlayer/>    
        <Recommended/>    
        <Footer/>      
    </div>
    
  )
}

export default MoviePlayer