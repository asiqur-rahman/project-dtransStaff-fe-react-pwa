import { useState, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const [checked, setChecked] = useState(false);
    const [isLogedIn, setIsLogedIn]= useState(false);
    useEffect(()=>{
        setIsLogedIn(false);
        setChecked(true);
    },[])
    return(
        <>{checked && <>{isLogedIn ? <Outlet/> : <Navigate to="/login"/>}</>}</>
    )
}

export default PrivateRoutes