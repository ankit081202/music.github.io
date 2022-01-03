var play_button = document.getElementById("play");
var audio = document.getElementById("audio");
var prev = document.getElementById("prev");
var forward = document.getElementById("forward");
var song = document.getElementById("song");
var artist = document.getElementById("artist");
var img = document.querySelector("img");

const playlist = [{
  name: "i",
  song: "ON & ON",
  artist: "Daniel Levi",
}, {
  name: "ii",
  song: "ELEKTROMANIA",
  artist: "Alan Walker",
}, {
  name: "iii",
  song: "Cradles",
  artist: "Cradles",
}, ];

// play & pause
play_button.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    play_button.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
  } else {
    audio.pause();
    play_button.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime");
  }
});
const loadSong = function(playlist) {
  song.innerHTML = playlist.song;
  artist.textContent = playlist.artist;
  audio.src = "music/" + playlist.name + ".mp3";
  img.src = "images/" + playlist.name + ".jpg";
};

index = 0;
const nextsong = function() {
  index=(index+1)%3;
  loadSong(playlist[index]);
  audio.pause();
  play_button.classList.replace('fa-pause', 'fa-play');
  img.classList.remove("anime");
};
const prevsong = function() {
  index=(index-1 +3)%3;
  loadSong(playlist[index]);
  audio.pause();
  play_button.classList.replace('fa-pause', 'fa-play');
  img.classList.remove("anime");
};
forward.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);
