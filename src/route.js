import React from 'react';
import Home from './components/content/Home';
import User from './containers/users/users';
import System from './components/content/system';
import Add from './containers/add/add';
import Delete from './containers/delete/delete';

const routes = [
    {
        id: 1,
        path:'',
        component: Home
    },
    {
        id: 2,
        path:'home',
        component: Home
    },
    {
        id: 3,
        path:'users',
        component: User
    },
    {
        id: 4,
        path:'add',
        component: Add
    },
    {
        id: 5,
        path:'update',
        component: System
    },
    {
        id: 6,
        path:'delete',
        component: Delete
    }
];

export default routes;