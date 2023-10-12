// -------------------------------
// IMPORTS
// -------------------------------
import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
// -------------------------------
// COMPONENTS
// -------------------------------
import MenuItem from './MenuItem';

function Menu() {
  const menuData = useLoaderData(); // This hook provides the value returned from your route loader

  return (
    <ul>
      {menuData.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
