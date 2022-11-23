export default function PlayingMusic({musicData}) {

    return (
        <div class="page">
          <div class="headBar">
            <div class="playingMusic">
              <i class="fa-solid fa-angle-left headIcon"></i>
            </div>
            <p class="nowPlaying">Now playing</p>
              <i class="fa-solid fa-ellipsis-vertical headIcon"></i>
          </div>
          <div class="music">
          <img src="" alt="musicImage" class="musicImage"/>
              <div class="music-Name-Author-Like">
                <div class="music-Name-Author">
                  <p class="musicName">Shape Of You</p>
                  <p class="musicAuthor">Ed Sheeran</p>
                </div>
                  <i class="fa-regular fa-heart musicLike"></i>
              </div>
          </div>
          <div class="chargeBar"></div>
          <div class="musicTime">
            <p>0:00</p>
            <p>4:02</p>
          </div>
          <div class="buttonsMusic">
            <i class="fa-solid fa-repeat repeat"></i>
            <i class="fa-solid fa-backward previous"></i>
            <i class="fa-regular fa-circle-play playMusic"></i>
            <i class="fa-solid fa-forward next"></i>
            <i class="fa-solid fa-shuffle shuffle"></i>
          </div>
          <div class="lyricsFooter">
            <i class="fa-solid fa-chevron-up arrowUp"></i>
            <p class="lyrics">Lyrics</p>
          </div>
        </div>
      );
}