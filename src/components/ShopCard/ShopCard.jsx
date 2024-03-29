import React from 'react';

const ShopCard = ({ item }) => {
  return (
    <div className='shop-card'>
      <p className='shop-card__heading'>{item.name}</p>
      <p className='shop-card__color'>{item.color}</p>
      <img src={item.img} alt='' className='shop-card__img' />
      <div className='shop-card__menu'>
        <p className='shop-card__price'>${item.price}</p>
        <button className='shop-card__btn'>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ShopCard;
