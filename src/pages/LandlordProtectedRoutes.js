import React from 'react'
import { Redirect, Route} from "react-router-dom"

function LandlordProtectedRoutes({isLandlordLoggedIn: isLandlordLoggedIn, component: Component, ...rest}) {
    return (
        <Route {...rest} render={(props) => {
            if (isLandlordLoggedIn){
                return <Component />
            } else {
               return <Redirect to={{pathname : "/landlords/login", state : {from : props.location}}} />
            }
        }}
        
        />
    )
}

export default LandlordProtectedRoutes
