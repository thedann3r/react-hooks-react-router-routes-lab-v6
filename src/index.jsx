import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes'; // Import the routes defined in routes.js
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
