import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = createBrowserRouter([
  {
    path: '/Task-4-Adv/',
    element: <App />, 
    children: [
      {
        index: true, 
        element: <LandingPage />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
) 
