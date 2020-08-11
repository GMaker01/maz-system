import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from "store";
import Routes from './routes';

import 'assets/css/main.css';
import 'assets/css/style.scss';

import 'services/utilities';

const loading = () => (<p>Loading...</p>);


class App extends Component {

    render() {
        console.log('Environment', process.env.REACT_APP_ENV);
        return (
            <Provider store={store}>
                <Router>
                    <React.Suspense fallback={loading()}>
                        <Routes />
                    </React.Suspense>
                </Router>
            </Provider>
        );
    }
}

export default App;
