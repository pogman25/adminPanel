import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Route } from 'react-router-dom';
import SideBar from '../components/sideBar/SideBar';
import Content from './content/content';
import Home from '../components/content/Home'
import './index.scss'

const App = () => (
    <div className="mainContent">
            <SideBar/>
            <CSSTransitionGroup
                    transitionName="fade"
                    component="div"
                    className="innerContent"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                        <Route
                            location={location}
                            key={location}
                            path='/:pathName'
                            component={Content}
                        />
                </CSSTransitionGroup>
            <Route
                    path='/'
                    exact={true}
                    component={Home}
                />
    </div>
);

export default App;