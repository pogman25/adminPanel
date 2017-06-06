import React from 'react';
import Home from './components/content/Home';
import User from './components/content/user';
import System from './components/content/system';
import Image from './components/content/image';

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
        component: Image
    },
    {
        id: 5,
        path:'update',
        component: System
    }
];

export default routes;