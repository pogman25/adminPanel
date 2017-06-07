import React from 'react';
import './users.scss'

const Users = ({users}) => {

    return (
    <div className="usersList">
        <ul>
            <li>
                <h2>Name</h2>
                <p>Age</p>
                <p>Phone number</p>
            </li>
            {users.map( ({id, name, age, phone}) => (
                <li key={id}>
                    <h2>{name}</h2>
                    <p>{age}</p>
                    <p>{phone}</p>
                </li>
            ))}
        </ul>
    </div>
    )
};

export default Users;