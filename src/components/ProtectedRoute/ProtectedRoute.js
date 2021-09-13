import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const ProtectedRoute = ({ isLogged, ...routeProps }) => {
    return isLogged ? <Route {...routeProps} /> : <Redirect to="/" />;
};
export default ProtectedRoute;