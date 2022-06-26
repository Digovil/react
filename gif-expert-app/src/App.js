import React, {useState} from 'react';

import './styles/App.css';
import AddCategory from "./components/AddCategory.js";
import GifGrid from './components/GifGrid';

function App() {
  const [categories,setCategories] = useState(['']);

  // const handleAdd = () => {
  //   setCategories([...categories,'Miguel'])
  // }

  return (
    <>
      <div className="container-header">
        <div className='title'>
          <h1>Gif Finder 🎁</h1>
        </div>
        <div className='findGif'>
          <AddCategory setCategories = { setCategories } />
        </div>
      </div>

      <div className='container-main'>
          {
            categories.map(category => 
            (
              <GifGrid 
                key={category}
                category={category}
              />
            ))
          }
      </div>
    </>
  );
}

export default App;
