import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveProgress, 1000));

function saveProgress(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime).then(function (seconds) {
    // seconds = the actual time that the player seeked to
  });
}
