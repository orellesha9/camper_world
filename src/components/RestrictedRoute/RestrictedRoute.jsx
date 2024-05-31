import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ redirectTo = '/' }) => {
    return <Navigate to={redirectTo} />;
};

export default RestrictedRoute;
