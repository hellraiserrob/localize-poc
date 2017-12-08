import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { initialize, addTranslation } from 'react-localize-redux';

import { Provider } from 'react-redux';
import store from './store'

import Login from './containers/Login'

import translations from './translations/all'

import './App.css'


const languages = ['en', 'fr'];
store.dispatch(initialize(languages));


store.dispatch(addTranslation(translations));


class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <Router>

                    <Switch>

                        <Route exact path="/" component={Login} />

                    </Switch>

                </Router>

            </Provider>
        );
    }
}

export default App;
