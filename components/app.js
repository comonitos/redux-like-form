import React from 'react';
import ReactDOM from "react-dom";

import {Main} from './Main/Main';
import {Storage,InitialState} from '../data/storage';

import './reset.scss';
import './styles.scss';


function renderer (store) {
    ReactDOM.render(
        <Main store={store} />,
        document.getElementById('app')
    )
}

export const store = new Storage(InitialState(),renderer);
