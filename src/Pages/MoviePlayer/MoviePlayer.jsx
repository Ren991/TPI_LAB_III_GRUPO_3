import NavBarPage from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import { useContext, useState, useEffect } from "react";
import { useUser } from "../../Components/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import useScrollToTop from "../../hooks/useScrollToTop";

function MoviePlayer() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  console.log(user);

  useScrollToTop();
   useEffect(() => {
    if (user !== "null") {
      setLoading(false);

    }

  }, [user]); 
 

  return (
    <div>
      <NavBarPage />
      <VideoPlayer />
      <Footer />
    </div>

  )
}

export default MoviePlayer