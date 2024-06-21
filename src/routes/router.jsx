import React from "react";
import { createBrowserRouter, } from "react-router-dom";
import RootLayout from "../layout/Rootlayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/services/service";
import Work from "../pages/work/work";
import Contactus from "../pages/contact/contact";
import News from "../pages/News/news";


export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'services',
                element: <Services />,
            },
            {
                path: 'projects',
                element: <Work />
            },
            {
                path: 'contactus',
                element: <Contactus />
            },
            {
                path: 'news',
                element: <News />
            },
            // {
            //     path: 'signin',
            //     element: <Login />
            // },
        ]
    },
]);