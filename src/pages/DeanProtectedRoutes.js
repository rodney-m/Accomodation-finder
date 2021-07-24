import React from 'react'
import {Redirect, Route} from "react-router-dom"

function DeanProtectedRoutes({isAdmin: isAdmin, component : Component, ...rest}) {
    return (
        <Route {...rest} render={(props) => {
            if (isAdmin){
                return <Component />
            } else {
                return <Redirect to={{pathname: "/admin", state: {from: props.location}}} />
            }
        }}
        />
    )
}

export default DeanProtectedRoutes
