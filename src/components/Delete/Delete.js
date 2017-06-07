import React from 'react';
import PropTypes from 'prop-types';
import garbage from '../../img/garbage.svg'
import './delete.scss';

const Delete = ({users, pageActions}) => {

    const del = (event) => {
        const { delPerson } = pageActions;
        delPerson(event);
    };

    return (
    <div className="usersList deleteForm">
        <ul>
            <li>
                <h2>Delete Person</h2>
            </li>
            {users.map( ({id, name}) => (
                <li key={id}>
                    <h2>{name}</h2>
                    <div onClick={() => del(id)}><img src={garbage}/></div>
                </li>
            ))}
        </ul>
    </div>
    )
};

Delete.PropTypes = {
    users: PropTypes.array.isRequired,
    pageActions: PropTypes.func.isRequired
};

export default Delete;