import React from 'react';
import logo from './logo.svg';
import ProductList, { Counter } from './features/product-list/ProductList';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* <SignupPage /> */}
    </div>
  );
}

export default App;
