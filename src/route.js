import React from 'react';
import Home from './components/content/Home';
import User from './containers/users/users';
import Update from './containers/update/update';
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
        component: Update
    },
    {
        id: 6,
        path:'delete',
        component: Delete
    }
];

export default routes;