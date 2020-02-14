// // react
import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import * as serviceWorker from './serviceWorker';

// redux
import {Provider} from 'react-redux';
import createStore from './redux/@createStore';

// layout
import App from './layout/App';

// global import css
import './styles/index.css';
import './styles/tailwind.css';

const element = (
    <>
        <Helmet>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                  crossOrigin=""/>
            {/* <!-- Make sure you put this AFTER Leaflet's CSS --> */}
            <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
                    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
                    crossOrigin=""></script>
        </Helmet>
        <Provider store={createStore()}>
            <App/>
        </Provider>
    </>
);

ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
