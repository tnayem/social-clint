import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../About/About';
import Home from '../../Home/Home';
import LogIn from '../../LogIn/LogIn';
import Main from '../../Main/Main';
import Media from '../../Media/Media';
import Message from '../../Message/Message';
import SignUp from '../../SignUp/SignUp';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/media',
                element:<Media></Media>
            },
            {
                path:'/message',
                element:<Message></Message>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])
