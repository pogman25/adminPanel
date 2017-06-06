import React from 'react';
import Error from '../../components/content/errorPage';
import { CSSTransitionGroup } from 'react-transition-group';
import routes from '../../route';

const Content = ({ match }) => {
    const url = match.params.pathName;

    let Content, id;

    let element = routes.find( i => i.path === url);

    element ? Content = element.component : Content = Error;

    element ? id = element.id : id = 0;

    return (
        <CSSTransitionGroup
            transitionName="content"
            component="div"
            className="content"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
        >
            <Content key={id}/>
        </CSSTransitionGroup>
    )
};

export default Content;