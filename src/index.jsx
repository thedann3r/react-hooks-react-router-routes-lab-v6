import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import routes from './routes'; // Import the routes defined in routes.js
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
