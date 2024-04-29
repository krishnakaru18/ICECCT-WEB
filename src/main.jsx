import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home,
  Callfor,
  Committees,
  Contact,
  Down,
  Gallery,
  Paper,
  Plan,
  Program,
  Registration,
  Special,
  } from './pages';

import { Footer } from './components/index.js';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/Footer",
        element: <Footer/>,
      },


      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "/Gallery",
        element: <Gallery/>,
      },
      {
        path: "/Committees",
        element: <Committees/>,
      },
      {
        path: "/Call-for-Papers",
        element: <Callfor/>,
      },
      {
        path: "/Paper-Status",
        element: <Paper/>,
      },
      {
        path: "/Program",
        element: <Program/>,
      },
      {
        path: "/Special-Sessions",
        element: <Special/>,
      },
      {
        path: "/Registration",
        element: <Registration/>,
      },
      {
        path: "/Plan-Travel",
        element: <Plan/>,
      },
      {
        path: "/Downloads",
        element: <Down/>,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
