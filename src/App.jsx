// -------------------------------
// IMPORTS
// -------------------------------
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// -------------------------------
// COMPONENTS
// -------------------------------
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/order/new',
    element: <CreateOrder />,
  },
  {
    path: '/order/:orderId',
    element: <Order />,
  },
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
