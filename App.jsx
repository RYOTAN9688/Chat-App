import React from 'react';

import Login from './Login';
import SignUp from './SignUp';
import Room from './Room';

import { AuthProvider } from './AuthService'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Room} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}


export default App;