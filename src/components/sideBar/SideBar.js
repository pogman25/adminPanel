import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import route from '../../route';

import './sideBar.scss'

class sideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: ['home', 'user', 'system', 'image']
        }
    }

    componentWillMount() {
        const routePages = route.reduce((sum, i) => {
            return i.path !== '' ? [...sum, i.path] : sum;
        }, []);
        this.setState({
            pages: routePages
        })
    }

    render() {
        return (
            <div className="sideBar">
                <div>
                    <h2>Dashboard</h2>
                </div>
                <ul>
                    {this.state.pages.map((i, index) => (
                        <li key={index}>
                            <NavLink
                                to={`/${i}`}
                                activeClassName="current"
                            >{i}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default sideBar;