import React, {useState} from 'react';
import './styles.scss';

import {deleteComment} from "../../actions/actions";

import {CommentsControl} from "../CommentsControl/CommentsControl";
import {Comment} from "../Comment/Comment";

export const CommentsList = (props) => {

    const list = props.store;
    const [state,setState] = useState({
        showComments: true,
        enableCommentEdit: true
    });

    const listHTML =  (<ul>
                          {
                              list.map((element, index) => {
                                return (<Comment index={index} name={element.name} date={element.date} content={element.content} handleDelete={removeComment} />)
                              })
                          }
                       </ul>);

    return (
        <div id="comments">
            <CommentsControl title={commentsTitle(list)} buttonTitle={commentsButtonTitle(state.showComments)} handleClick={toggleComments} />
            { commentsCount(list) > 0 && state.showComments ? listHTML : null }
        </div>
    );

    function removeComment (index) {
        deleteComment(index);
    }

    function toggleComments () {
        const currentMode = state.showComments;
        setState({
            showComments: !currentMode
        });
    }
    function commentsCount (comments) {
        const count = comments.length;
        return count
    }

    function commentsButtonTitle (isShown) {
        return isShown ? "Hide Comments" : "Show Comments";
    }

    function commentsTitle (comments) {
        const count = commentsCount(comments);

        if (count === 0) {
            return "No comments"
        } else if (count === 1) {
            return count + " comment"
        }
        return count + " comments"
    }
};


