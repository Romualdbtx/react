import './App.css';
import shapeOfYou from './shapeOfYou.png';

function App() {
  return (
    <div>
      <div class="headBar">
        <div class="playingMusic">
          <i class="fa-solid fa-angle-left headIcon"></i>
        </div>
        <p class="nowPlaying">Now playing</p>
          <i class="fa-solid fa-ellipsis-vertical headIcon"></i>
      </div>
      <div class="music">
      <img src={shapeOfYou} alt="musicImage" class="musicImage"/>
          <div class="music-Name-Author-Like">
            <div class="music-Name-Author">
              <p class="musicName">Shape Of You</p>
              <p class="musicAuthor">Ed Sheeran</p>
            </div>
              <i class="fa-regular fa-heart musicLike"></i>
          </div>
      </div>
    </div>
  );
}

export default App;

