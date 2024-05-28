import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const Private = ({ isSignedIn }) => {
    console.log(isSignedIn)
    if (isSignedIn === false)
        return <Navigate to="/signIn" />;
    else
        return <Navigate to="/moviePlayer" />;

};

export default Private;