import React from 'react';
import { Route } from 'react-router-dom';

import LoginScreen from './Pages/LoginScreen/LoginScreen';
import Dashboard from './Pages/Dashboard/Dashboard';

function App(){
    return (
        <React.Fragment>
            <Route exact path="/" component={LoginScreen}/>
            <Route exact path="/Dashboard" component={Dashboard}/>
        </React.Fragment>
    )
}

export default App;