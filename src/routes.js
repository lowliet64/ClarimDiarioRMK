
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import EditorComponent from './pages/EditorComponent'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/UserProfle'
import isAuthenticated from './auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )

    }

    />
);
function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing} />
            <Route path='/article' component={EditorComponent} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/user/profile' component={UserProfile} />
        </BrowserRouter>
    )
}
export default Routes;