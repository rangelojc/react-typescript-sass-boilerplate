import React from 'react';
import logo from '../assets/logo.svg';

import Home from './components/Home';
import Test from './components/Test';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container" >
                <Router>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/test">
                            <Test />
                        </Route>
                        <Route path="/">
                            <Test />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
