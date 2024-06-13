import React, { useEffect, useState } from 'react';
import Footer from "../../Components/Footer/Footer";
import NavBarPage from '../../Components/Navbar/Navbar';
import ContentAdmin from '../../Components/ContentAdmin/ContentAdmin';
import { useUser } from "../../Components/AuthContext/AuthContext";
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { user } = useUser(); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && user.role !== "admin"){
      navigate("/home");
    }
  }, [user]);


  return (
    <div style={{ width: '100%' }}>
      <NavBarPage />
      <ContentAdmin />
      <Footer />
    </div>
  );
}

export default Admin;
