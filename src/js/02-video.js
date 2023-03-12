import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(el => {
    currentTime(el);
  }, 1000)
);

function currentTime(el) {
  localStorage.setItem(STORAGE_KEY, el.seconds);
}

const savedSeconds = localStorage.getItem(STORAGE_KEY);
if (savedSeconds) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}
