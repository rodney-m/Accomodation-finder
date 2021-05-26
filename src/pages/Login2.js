import React from 'react'
import {useAuth0} from "@auth0/auth0-react"



function Login2() {
  const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()


    return (
        <div>
            <button onClick={loginWithPopup}>Login with Popup</button>   
            <button onClick={loginWithRedirect}>Login with Redirect</button>   
            <button onClick={logout}>Logout</button>   

            <h3> User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>

            {isAuthenticated && (
                <pre style= {{textAlign : 'start'}}>{JSON.stringify(user, null, 3)}</pre>
            )}

        </div>
    )
}

export default Login2
