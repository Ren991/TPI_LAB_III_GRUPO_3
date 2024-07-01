import { Navigate } from "react-router-dom";
import { useUser } from "../AuthContext/AuthContext";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({ children }) => {
    const { user } = useUser();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Retraso de 1 segundo

        return () => clearTimeout(timer); // Limpiar el temporizador cuando se desmonte el componente
    }, []);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/home" replace />;
    }

    return children;
};

export default PrivateRoute;
