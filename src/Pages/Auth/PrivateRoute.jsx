import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function PrivateRoute(props) { 
    const state = useSelector(state => state.auth) 
    const navigate = useNavigate(); 

    useEffect(() => {
        if (!state.user.email) { 
            navigate("/login/", { replace: true }); 

        }

    }, [])

  return (
    <props.element />
  )
}

export default PrivateRoute