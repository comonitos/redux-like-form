import React from 'react'
import styles from './styles.scss';

export const Comment = (props) => {
    const {name, date, content, index, handleDelete} = props;

    return (
        <li className="comment">
            <a href="javascript:void(0)" onClick={ () => {handleDelete(index)} }>delete</a>
            <h2>{name}</h2>
            <span>{date}</span>
            <p>{content}</p>
        </li>
    );
}