import React from 'react'
import Footer from "../../Components/Footer/Footer"
import NavBarPage from '../../Components/Navbar/Navbar'
import ContentAdmin from '../../Components/ContentAdmin/ContentAdmin'


const Admin = () => {
  return (
    <div style={{width: '100%'}}>
        <NavBarPage/>
        <ContentAdmin/>
        <Footer/>
    </div>
  )
}

export default Admin