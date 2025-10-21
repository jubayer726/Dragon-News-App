import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Page/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading, setLoading} = use(AuthContext)

    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to ='/auth/login' state={location.pathname}></Navigate>
    
};

export default PrivateRoute;