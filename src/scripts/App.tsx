import React from 'react';
import logo from '../assets/logo.svg';

class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container" >
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <p>
                        Edit <code>src/scripts/App.tsx</code> and save to reload.
                     </p>
                    <a
                        className="app-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
