import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate= useNavigate();
  return (
    <div className="page_404">
    <div className="four_zero_four_bg">
      <h1 className="text-center">404</h1>
    </div>

    <div className="contant_box_404">
      <h3 className="h2">Parece que te perdiste</h3>
      <p>La página que buscas no existe!</p>
      <a onClick={()=>navigate("/home")}className="link_404">
        Volver 
      </a>
    </div>
  </div>
  );
}

export default NotFound;
