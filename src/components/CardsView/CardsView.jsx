import React from 'react';
import ShopCard from '../ShopCard';

const CardsView = ({ items }) => {
  console.log(items);
  return (
    <div className='cards-view'>
      {items && items.map((item) => <ShopCard item={item} />)}
    </div>
  );
};

export default CardsView;
