import React, { useState } from 'react';
import Li from './Li';
import logo from './logo.svg';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [sitem, setSitem] = useState([]);

  const Items = (e) => {
    console.warn(e.target.value)
    setItem(e.target.value)

  }

  const onSubmit = () => {
    setSitem((arr) => {
      return [...arr, item];
    })
    setItem('');
  }

  const itemDelet = (id)=>{
    console.warn("Delete")

    setSitem((oldData)=>{
      return oldData.filter((arrEle, i)=>{
        return i !== id;
      });
    });
  }
  return (
    <div className="App">
      <div className='center_div'>
        <h1> ToDo-List</h1>
        <br />
        <input type='text' placeholder='Add Your Item' onChange={Items} value={item} />
        <button className='bt1' onClick={onSubmit}> + </button>
        <br /><br />

        <ol>
          {
            sitem.map((value, i) => {
              return <Li value={value} key={i} id={i} onSelect={itemDelet} />
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;
