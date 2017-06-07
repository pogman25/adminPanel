import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuidV1 from 'uuid/v1';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            phone: '',
            error: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const { addPerson } = this.props.pageActions;
        const { name, age, phone } = this.state;

        if(name.trim() && age && phone.trim()) {
            const id = uuidV1();
            addPerson({
                id,
                name,
                age,
                phone
            });
            this.setState({
                name: '',
                age: '',
                phone: '',
                error: false
            })

        } else {
            this.setState({error: true});
            console.error('Fill all forms');
        }
    };

    handleChange(event) {
        const { target } = event;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { users } = this.props;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <input
                        min="18"
                        name="age"
                        type="number"
                        value={this.state.age}
                        placeholder="Age"
                        onChange={this.handleChange}
                    />
                    <input
                        name="phone"
                        type="text"
                        value={this.state.phone}
                        placeholder="Phone"
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Add Person"/>
                </form>
                {this.state.error && <span>Fill all Forms</span>}
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
            </div>
        )
    }
}

Add.PropTypes = {
    users: PropTypes.array.isRequired,
    pageActions: PropTypes.func.isRequired
};

export default Add;
