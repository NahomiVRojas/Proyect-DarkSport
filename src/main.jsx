import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './views/App';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Members from './views/Members';
import ContactUs from './views/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'aboutUs',
        element: <AboutUs />,
      },
      {
        path: 'members',
        element: <Members />,
      },
      {
        path: 'contactUs',
        element: <ContactUs />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
