import './App.css';
import { useState } from 'react';
import PlayingMusic from './components/playingMusic';
import shapeOfYou from './images/shapeOfYou.png';
import despacito from './images/despacito.png';

const [musics] = ([
  {id: 1, author: "Ed Sheeran", name: "shapeOfYou", time: 300, image: {shapeOfYou}},
  {id: 2, author: "Luis Fonsi", name: "Despacito", time: 420, image: {despacito}}
]);

function App() {
  return (
    <div class="page">
      <PlayingMusic
        musicData={musics[0]}
      />
    </div>
  );
}

export default App;

