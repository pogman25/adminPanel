import React from 'react';

const Users = ({users}) => {

    return (
        <ul>
            {users.map( ({id, name, age, phone}) => (
                <li key={id}>
                   <h2>{name}</h2>
                    <p>{age}</p>
                    <p>{phone}</p>
                </li>
            ))}
        </ul>
    )
};

export default Users;