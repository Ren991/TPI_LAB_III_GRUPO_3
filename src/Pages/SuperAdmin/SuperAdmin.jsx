import React from 'react'
import Footer from "../../Components/Footer/Footer"
import NavBarPage from '../../Components/Navbar/Navbar'
import ContentSuperAdmin from '../../Components/ContentSuperAdmin/ContentSuperAdmin'


const SuperAdmin = () => {
  return (
    <div style={{width: '100%'}}>
        <NavBarPage/>
        <ContentSuperAdmin/>
        <Footer/>
    </div>
  )
}

export default SuperAdmin