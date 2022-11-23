import { useState } from "react";

export default function PlayingMusic({musicData, updateLike}) {

    const [currentMusic, setCurrentMusic] = useState(0);

    const statement = (value) => {

        let newMusic = currentMusic + value;
        const maxRange = musicData.length;

        if (newMusic >= 0 && newMusic < maxRange)
        {
            setCurrentMusic(newMusic);
        }
    }

    const like = () => {

        const isLike = musicData[currentMusic].likeByUser;
        
        if (isLike)
        {
            updateLike(musicData[currentMusic], false);
        }
        else if (!isLike)
        {
            updateLike(musicData[currentMusic], true);
        }
    }

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
          <img src={musicData[currentMusic].image} alt="musicImage" class="musicImage"/>
              <div class="music-Name-Author-Like">
                <div class="music-Name-Author">
                  <p class="musicName">{musicData[currentMusic].name}</p>
                  <p class="musicAuthor">{musicData[currentMusic].author}</p>
                </div>
                    {musicData[currentMusic].likeByUser 
                        ? <i class="fa-solid fa-heart musicLikeTrue" onClick={like}></i>
                        : <i class="fa-regular fa-heart musicLike" onClick={like}></i>
                    }
              </div>
          </div>
          <div class="chargeBar"></div>
          <div class="musicTime">
            <p>0:00</p>
            <p>4:02</p>
          </div>
          <div class="buttonsMusic">
            <i class="fa-solid fa-repeat repeat"></i>
            <i class="fa-solid fa-backward previous" onClick={() => statement(-1)}></i>
            <i class="fa-regular fa-circle-play playMusic"></i>
            <i class="fa-solid fa-forward next" onClick={() => statement(1)}></i>
            <i class="fa-solid fa-shuffle shuffle"></i>
          </div>
          <div class="lyricsFooter">
            <i class="fa-solid fa-chevron-up arrowUp"></i>
            <p class="lyrics">Lyrics</p>
          </div>
        </div>
      );
}