import React from 'react';

const Delete = ({users, pageActions}) => {

    const del = (event) => {
        const { delPerson } = pageActions;
        delPerson(event);
    };

    return (
        <ul>
            {users.map( ({id, name}) => (
                <li key={id}>
                    <h2>{name}</h2>
                    <div onClick={() => del(id)}>X</div>
                </li>
            ))}
        </ul>
    )
};

export default Delete;