import React from 'react'
import Footer from "../../Components/Footer/Footer"
import NavBarPage from '../../Components/Navbar/Navbar'
import ContentAdmin from '../../Components/ContentAdmin/ContentAdmin'
import {useUser} from "../../Components/AuthContext/AuthContext";
import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';


const Admin = () => {

  const {user} = useUser(); 
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(user);
    if (user &&user.role && user.role !==  "admin") {
     navigate("/home")
    }
    
    console.log(user);
  }, [user]);     

 
  return (
    <div style={{width: '100%'}}>
        <NavBarPage/>
        <ContentAdmin/>
        <Footer/>
    </div>
  )
}

export default Admin