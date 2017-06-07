import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './users.scss'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            sorting: false
        };
        this.sort = this.sort.bind(this);
    }

    sort(sortBy) {
        if(sortBy === 'name') {
            if(this.state.sorting) {
                this.setState({
                   users: [...this.state.users].sort((a, b) => (b.name < a.name) ? 1 : -1),
                   sorting: !this.state.sorting
                });
            } else {
                this.setState({
                    users: [...this.state.users].sort((a, b) => (b.name < a.name) ? -1 : 1),
                    sorting: !this.state.sorting
                });
            }
        }
        if(sortBy === 'age') {
            if(this.state.sorting) {
                this.setState({
                    users: [...this.state.users].sort((a, b) => (b.age - a.age)),
                    sorting: !this.state.sorting
                });
            } else {
                this.setState({
                    users: [...this.state.users].sort((a, b) => (a.age - b.age)),
                    sorting: !this.state.sorting
                });
            }
        }
    }

    render() {
        return (
            <div className="usersList users">
                <ul>
                    <li>
                        <h2 onClick={() => this.sort('name')}>Name</h2>
                        <p onClick={() => this.sort('age')}>Age</p>
                        <p>Phone number</p>
                    </li>
                    {this.state.users.map( ({id, name, age, phone}) => (
                        <li key={id}>
                            <h2>{name}</h2>
                            <p>{age}</p>
                            <p>{phone}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

Users.PropTypes = {
    users: PropTypes.array.isRequired
};

export default Users;