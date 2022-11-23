import './App.css';
import { useState } from 'react';
import PlayingMusic from './components/playingMusic';
import shapeOfYou from './images/shapeOfYou.png';
import despacito from './images/despacito.png';
import gamnanStyle from './images/gamnanStyle.png';

function App() {

  const [musics] = useState ([
    {id: 1, author: "Ed Sheeran", name: "ShapeOfYou", time: 300, image: {shapeOfYou}},
    {id: 2, author: "Luis Fonsi", name: "Despacito", time: 420, image: {despacito}},
    {id: 3, author: "Park Jae Sang", name: "GamnanStyle", time: 280, image: {gamnanStyle}}
  ]);

  return (
    <div class="page">
      <PlayingMusic
        musicData={musics}
      />
    </div>
  );
}

export default App;

