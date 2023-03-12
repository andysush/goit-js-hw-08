import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(el => {
    currentTime(el);
  }, 1000)
);

function currentTime(el) {
  localStorage.setItem('videoplayer-current-time', el.seconds);
}

const savedSeconds = localStorage.getItem('videoplayer-current-time');
if (savedSeconds) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
