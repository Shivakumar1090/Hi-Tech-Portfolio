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
import axios from "axios";
import importAllImages from "../utils/imagesImporter";

const NEWSAPILINK = "https://newsapi.org/v2/everything?q=Mechanical%20Engineering%20and%20Technology%20News&sortBy=popularity&apiKey=32420470b8554916a1409dd5a9441c84&page=1&pageSize=30"

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
                element: <Work />,
                loader: (async() => {
                            const Mechimages = importAllImages(require.context('../Assets/Hitech Photos/Mechanical', false, /\.(png|jpe?g|svg)$/));
                            const Elecimages = importAllImages(require.context('../Assets/Hitech Photos/Electrical', false, /\.(png|jpe?g|svg)$/));
                            return {Elecimages, Mechimages};
                        })
            },
            {
                path: 'contactus',
                element: <Contactus />
            },
            {
                path: 'news',
                element: <News />,
                loader: (async ({ request }) => {
                            const res = await axios.get(NEWSAPILINK);
                            const newsdata = await res?.data?.articles;
                            return newsdata;
                        })
            },
           
        ]
    },
]);