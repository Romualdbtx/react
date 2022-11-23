import './App.css';
import { useState } from 'react';
import PlayingMusic from './components/playingMusic';
import shapeOfYou from './images/shapeOfYou.png';
import despacito from './images/despacito.png';
import gamnanStyle from './images/gamnanStyle.png';

// Je n'arrive pas à importer les images au niveau du composent 'playingMusic"
// On peu changer les musiques avec les flèches, droite/gauche.
// On peu j'aime les musiques yaouuu.

function App() {

  const [musics, setMusics] = useState ([
    {id: 1, author: "Ed Sheeran", name: "ShapeOfYou", time: 300, image: {shapeOfYou}, likeByUser: false},
    {id: 2, author: "Luis Fonsi", name: "Despacito", time: 420, image: {despacito}, likeByUser: false},
    {id: 3, author: "Park Jae Sang", name: "GamnanStyle", time: 280, image: {gamnanStyle}, likeByUser: false}
  ]);

  const updateLike = (currentMusic, currentLike) => {
    const musicsCopy = [...musics];
    const index = musicsCopy.indexOf(currentMusic);
    musicsCopy[index].likeByUser = currentLike;
    setMusics(musicsCopy);
  }

  return (
    <div class="page">
      <PlayingMusic
        musicData={musics}
        updateLike={updateLike}
      />
    </div>
  );
}

export default App;

