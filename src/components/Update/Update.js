import React, { Component } from 'react';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            age: '',
            phone: '',
            error: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.choose = this.choose.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        const { updPerson } = this.props.pageActions;
        const { id, name, age, phone } = this.state;

        if(name.trim() && age && phone.trim()) {
            updPerson({
                id,
                name,
                age,
                phone
            });
            this.setState({
                id: '',
                name: '',
                age: '',
                phone: '',
                error: false
            })

        } else {
            this.setState({error: true})
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

    choose(id, name, age, phone) {
        this.setState({
            id,
            name,
            age,
            phone
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
                    /><label htmlFor="name">Name</label>
                    <input
                        name="age"
                        type="number"
                        value={this.state.age}
                        placeholder="Age"
                        onChange={this.handleChange}
                    /><label htmlFor="age">Age</label>
                    <input
                        name="phone"
                        type="text"
                        value={this.state.phone}
                        placeholder="Phone"
                        onChange={this.handleChange}
                    /><label htmlFor="phone">Phone</label>
                    <input type="submit" value="Update form"/>
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
                            <li key={id}
                                onClick={() => this.choose(id, name, age, phone)}
                                className={this.state.id === id ? 'active' : ''}
                            >
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

export default Update;
