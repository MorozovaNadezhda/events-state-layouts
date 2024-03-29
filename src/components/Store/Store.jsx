import React from 'react';

import { useState } from 'react';

import IconSwitch from '../IconSwitch';
import CardsView from '../CardsView';
import ListView from '../ListView/ListView';

const Store = ({ products }) => {
  const [view, setView] = useState('view_list');

  const reverseView = () => {
    if (view === 'view_list') {
      setView('view_module');
    } else {
      setView('view_list');
    }
  };

  return (
    <div className='store'>
      <div className='store__header'>
        <IconSwitch icon={view} onSwitch={reverseView} />
      </div>
      <div className='store__body'>
        {view === 'view_module' && <CardsView items={products} />}
        {view === 'view_list' && <ListView items={products} />}
      </div>
    </div>
  );
};

export default Store;
