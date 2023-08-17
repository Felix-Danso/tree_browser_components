import React from 'react';
import logo from './logo.svg';
import './App.css';

type TEntry = {
  name: string;
  children: TEntry[]
};

const file = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: 'joi'
        }
      ]
    },
    {
      name: "package.json",
    },
    {
      name: "tsconfig",
    }
  ]
};


function Entry({name, children}: TEntry) {
  return <div
  >{name}
    {children.map((entry) => (
        <Entry {...entry}/>
    ))}
  </div>
}
function App() {
  return (
    <div className="App">
      {/*{file.children.map((entry) => (*/}
      {/*  <Entry {...entry}/>*/}
      {/*))}*/}
    </div>
  );
}

export default App;
