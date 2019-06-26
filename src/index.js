import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import { ThemeProvider } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import reducer from './store/reducers/reducer';
import mySaga from './store/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

if (process.env.NODE_ENV !== 'production') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React);
}
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter basename="https://felixsundqvist.github.io/pokedex/">
            <ThemeProvider theme={theme}><App /></ThemeProvider> 
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
