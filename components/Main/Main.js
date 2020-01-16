import React from 'react'

import {Form} from '../Form/Form'
import {CommentsList} from '../CommentsList/CommentsList'

import './styles.scss';

export const Main = (props) => {

    return (
        <div id="container">
            <Form/>
            <hr/>
            <CommentsList store={props.store}/>
        </div>
    )
};

