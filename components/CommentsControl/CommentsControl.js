import React from 'react';
import './styles.scss';

export const CommentsControl = (props) => {
    const {title,handleClick,buttonTitle} = props;

    return (
        <div className="comments-control">
            <a href="javascript:void(0)" onClick={handleClick}>{buttonTitle}</a>
            <span>{title}</span>
        </div>
    );
};