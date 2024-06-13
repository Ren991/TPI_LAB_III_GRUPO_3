import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const { isSignedIn } = useContext(AuthContext);

    if (isSignedIn === true) {
        return <Navigate to="/signIn" />;
    } else {
        
        return children;
    }

};

export default PrivateRoute;