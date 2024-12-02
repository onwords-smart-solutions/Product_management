import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function PrivateRoute(props) { 
    const state = useSelector(state => state.auth) 
    const navigate = useNavigate(); 

    useEffect(() => {
        if (!state.user.email.length) {  
          console.log(state.user.email, state.user.email.length)
            navigate("/login/", { replace: true }); 

        }

    }, [])

  return (
    <props.element />
  )
}

export default PrivateRoute