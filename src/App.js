import { useState } from 'react';
import Store from './components/Store';
import products from './products';
import './App.css';

function App() {
  const [data, setData] = useState(products || []);

  return (
    <div className='App'>
      <Store products={data} />
    </div>
  );
}

export default App;
