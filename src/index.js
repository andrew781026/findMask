// // react
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// redux
import {Provider} from 'react-redux';
import createStore from './redux/@createStore';

// layout
import App from './layout/App';

// global import css
import './styles/index.css';
import './styles/map.css';
import './styles/tailwind.css';

const element = (
    <Provider store={createStore()}>
        <App/>
    </Provider>
);

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
