// -------------------------------
// IMPORTS
// -------------------------------
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
// -------------------------------
// COMPONENTS
// -------------------------------
import CartOverview from './../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation(); // This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations
  const isLoading = navigation.state === 'loading';
  return (
    <div className='layout'>
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
