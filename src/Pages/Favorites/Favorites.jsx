import NavBarPage from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ContentFavorites from "../../Components/ContentFavorites/ContentFavorites";
import { useUser } from "../../Components/AuthContext/AuthContext";


function Favorites() {


    return (
      <div >
        <NavBarPage/>
        <ContentFavorites/>
        <Footer/>
      </div>
    )
  }
  
  export default Favorites