import { useLoaderData } from 'react-router-dom';

import { getMenu } from '../../services/apiRestaurant';

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return <div>menu</div>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
