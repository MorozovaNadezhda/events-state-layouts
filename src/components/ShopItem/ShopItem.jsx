import React from 'react';

const ShopItem = ({ item }) => {
  return (
    <div className='shop-item'>
      <img src={item.img} alt='' className='shop-item__img' />
      <p className='shop-item__heading'>{item.name}</p>
      <p className='shop-item__color'>{item.color}</p>
      <p className='shop-item__price'>${item.price}</p>
      <button className='shop-item__btn'>ADD TO CART</button>
    </div>
  );
};

export default ShopItem;
