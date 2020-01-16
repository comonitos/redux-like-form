import React from 'react';
import {addComment} from "../../actions/actions";
import style from './styles.scss'

export const Form = () => {

    function handleSubmit(e) {
        const data = new FormData(e.currentTarget);
        addComment(data.get("name"), "2 days", data.get("content"));
        e.preventDefault();
    }

    return (
        <div id="form">
            <h2>Add comment</h2>
            <form action="#" onSubmit={handleSubmit}>
                <input className="text" type="text" name="name" />
                <textarea cols="30" rows="10" name="content" />
                <input className="button" type="submit" value="Add comment" />
            </form>
        </div>
    );
};