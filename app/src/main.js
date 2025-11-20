import "./style.css";
//import { setupCounter } from "./counter.js";

//Steps
//Array of songs
//Create different categories of the music - In HTML
//Display all the cards on the screen with two different containers - the overall (songList) and the container for one song (song)
//Create filter buttons for the different categories/genres
//Create a playlist
//Add light and dark mode

const songs = [
  {
    name: "Megalovania",
    artist: "Toby Fox",
    genre: "game",
    image: "src/images/megalovania.jpg",
  },
  {
    name: "Clash Royale Theme Song",
    artist: "Carl V",
    genre: "game",
    image: "src/images/clashroyale.jpg",
  },
  {
    name: "Pigstep",
    artist: "Lena Raine",
    genre: "game",
    image: "src/images/pigstep.jpg",
  },
  {
    name: "Jumper",
    artist: "Waterflame",
    genre: "game",
    image: "src/images/jumper.webp",
  },
  {
    name: "Lifelight",
    artist: "Hideki Sakamoto",
    genre: "game",
    image: "src/images/lifelight.jpg",
  },
  {
    name: "Blinding Lights",
    artist: "The Weeknd",
    genre: "pop",
    image: "src/images/blindinglights.jpg",
  },
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    genre: "pop",
    image: "src/images/shapeofyou.webp",
  },
  {
    name: "Treat You Better",
    artist: "Shawn Mendes",
    genre: "pop",
    image: "src/images/treatyoubetter.jpg",
  },
  {
    name: "Clarity",
    artist: "Zedd ft. Foxes",
    genre: "edm",
    image: "src/images/clarity.jpg",
  },
  {
    name: "Animals",
    artist: "Martin Garrix",
    genre: "edm",
    image: "src/images/animals.jpg",
  },
  {
    name: "Don't You Worry Child",
    artist: "Swedish House Mafia",
    genre: "edm",
    image: "src/images/dontyouworrychild.jpg",
  },
  {
    name: "Silence",
    artist: "Marshmello ft. Khalid",
    genre: "edm",
    image: "src/images/silence.webp",
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    genre: "pop",
    image: "src/images/levitating.webp",
  },
  {
    name: "As It Was",
    artist: "Harry Styles",
    genre: "pop",
    image: "src/images/asitwas.jpg",
  },
  {
    name: "Hotel California",
    artist: "Eagles",
    genre: "rock",
    image: "src/images/hotelcalifornia.jpg",
  },
  {
    name: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "rock",
    image: "src/images/sweetchildomine.jpg",
  },
  {
    name: "Smells Like Teens Spirit",
    artist: "Nirvana",
    genre: "rock",
    image: "src/images/smellsliketeensspirit.jpg",
  },
  {
    name: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "rock",
    image: "src/images/bohemianrhapsody.webp",
  },
  {
    name: "Shelter",
    artist: "Porter Robinson & Madeon",
    genre: "edm",
    image: "src/images/shelter.jpg",
  },
  {
    name: "Back in Black",
    artist: "AC/DC",
    genre: "rock",
    image: "src//backinblack.jpg",
  },
];
const musicStore = document.querySelector(".musicLibrary");

function getSongs(songs) {
  musicStore.innerHTML = "";
  songs.forEach((song) => {
    musicStore.insertAdjacentHTML(
      "afterbegin",
      `<div class="songs" data-genre = "${song.genre}">
        <h2 class = "song">${song.name}</h2>
        <img src="${song.image}" alt = "${song.name}" />
        <button class = "btn song add" data-name = "${song.name}">Add to Playlist</button>
      </div>
      `
    );
  });
}
getSongs(songs);
