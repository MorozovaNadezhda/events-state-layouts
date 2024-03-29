import React from 'react';
import ShopItem from '../ShopItem/ShopItem';

const ListView = ({ items }) => {
  return <div className='list-view'>{items && items.map((item) => <ShopItem item={item} />)}</div>;
};

export default ListView;
