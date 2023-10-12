// -------------------------------
// IMPORTS
// -------------------------------
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// -------------------------------
// COMPONENTS
// -------------------------------
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Cart from './features/cart/Cart';

const route = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader, // render as the fetch
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
