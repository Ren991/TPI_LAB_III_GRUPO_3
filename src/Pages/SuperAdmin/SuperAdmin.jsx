import React from 'react'
import Footer from "../../Components/Footer/Footer"
import NavBarPage from '../../Components/Navbar/Navbar'
import ContentSuperAdmin from '../../Components/ContentSuperAdmin/ContentSuperAdmin';
import {useUser} from "../../Components/AuthContext/AuthContext";
import {useEffect} from "react";
import { useNavigate } from 'react-router-dom';


const SuperAdmin = () => {

  const {user} = useUser(); 
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user && user.role && user.role !== "superAdmin" || user === null) {
     navigate("/home")
    }
  }, [user]);   

  return (
    <div style={{width: '100%'}}>
        <NavBarPage/>
        <ContentSuperAdmin/>
        <Footer/>
    </div>
  )
}

export default SuperAdmin