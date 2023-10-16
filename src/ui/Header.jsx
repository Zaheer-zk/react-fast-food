import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from './SearchOrder';

const Header = () => {
  return (
    <>
      <Link to='/'>React Fast Food</Link>
      <SearchOrder />
    </>
  );
};

export default Header;
