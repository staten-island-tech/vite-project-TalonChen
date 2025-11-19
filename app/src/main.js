import "./style.css";
//import { setupCounter } from "./counter.js";

//Steps
//Array of songs
//Create different categories of the music - In HTML
//Display all the cards on the screen with two different containers - the overall (songList) and the container for one song (song)
//Add filter buttons for the different categories/genres
//Add playlist
//Add light and dark mode

const songs = [
  {
    name: "Megalovania",
    artist: "Toby Fox",
    genre: "game",
    image: "images/megalovania.jpg",
  },
  {
    name: "Clash Royale Theme Song",
    artist: "Carl V",
    genre: "game",
    image: "images/clashroyale.jpg",
  },
  {
    name: "Pigstep",
    artist: "Lena Raine",
    genre: "game",
    image: "images/pigstep.jpg",
  },
  {
    name: "Jumper",
    artist: "Waterflame",
    genre: "game",
    image: "images/jumper.webp",
  },
  {
    name: "Lifelight",
    artist: "Hideki Sakamoto",
    genre: "game",
    image: "images/lifelight.jpg",
  },
  {
    name: "Blinding Lights",
    artist: "The Weeknd",
    genre: "pop",
    image: "images/blindinglights.jpg",
  },
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    genre: "pop",
    image: "images/shapeofyou.webp",
  },
  {
    name: "Treat You Better",
    artist: "Shawn Mendes",
    genre: "pop",
    image: "images/treatyoubetter.jpg",
  },
  {
    name: "Clarity",
    artist: "Zedd ft. Foxes",
    genre: "edm",
    image: "images/clarity.jpg",
  },
  {
    name: "Animals",
    artist: "Martin Garrix",
    genre: "edm",
    image: "images/animals.jpg",
  },
  {
    name: "Don't You Worry Child",
    artist: "Swedish House Mafia",
    genre: "edm",
    image: "images/dontyouworrychild.jpg",
  },
  {
    name: "Silence",
    artist: "Marshmello ft. Khalid",
    genre: "edm",
    image: "images/silence.webp",
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    genre: "Pop",
    image: "images/levitating.webp",
  },
  {
    name: "As It Was",
    artist: "Harry Styles",
    genre: "Pop",
    image: "images/asitwas.jpg",
  },
  {
    name: "Hotel California",
    artist: "Eagles",
    genre: "rock",
    image: "images/hotelcalifornia.jpg",
  },
  {
    name: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "rock",
    image: "images/sweetchildomine.jpg",
  },
  {
    name: "Smells Like Teens Spirit",
    artist: "Nirvana",
    genre: "rock",
    image: "images/smellsliketeensspirit.jpg",
  },
  {
    name: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "rock",
    image: "images/bohemianrhapsody.webp",
  },
  {
    name: "Shelter",
    artist: "Porter Robinson & Madeon",
    genre: "edm",
    image: "images/shelter.jpg",
  },
  {
    name: "Back in Black",
    artist: "AC/DC",
    genre: "rock",
    image: "images/backinblack.jpg",
  },
];
const musicstore = document.querySelector(".musicStore");

function getSongs(songs) {
  musicstore.innerHTML = "";
  songs.forEach((song) => {
    musicstore.insertAdjacentElement(
      "afterbegin",
      `<div class="songs">
        <h2 class = "song">${song.name}</h2>
        <img src="${song.image}" alt = ${song.name} />
        <button class = "btn song add">Add to Playlist</button>
      </div>
      `
    );
  });
}
getSongs(songs);
