import { Navigate } from "react-router-dom"
import { useUser } from "../AuthContext/AuthContext";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute= ({ children }) => {
    const { user } = useUser();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); 

        return () => clearTimeout(timer); 
    }, []);

    if (isLoading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
        </div>
    }
    return children
}

  
  
  export default PrivateRoute