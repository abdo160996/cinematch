import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({children}) {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const {pathname} = useLocation()
    if(!isLoggedIn) {
       return <Navigate to={"/login"} state={{from:pathname}} />
    }else {
        return children
    }
  
  
}

export default RequireAuth