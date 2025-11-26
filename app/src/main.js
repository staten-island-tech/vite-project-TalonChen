import "./style.css";
//import { setupCounter } from "./counter.js";

//Steps
//Array of songs
//Create different categories of the music - In HTML
//Display all the cards on the screen with two different containers - the overall (musicLibrary) and the container for one song (song)
//Create filter buttons for the different categories/genres
//Create a playlist where they can add their songs
//Add light and dark mode
//Add the ability to insert new songs with their name, artist, genre, and image url.
//Add the ability to add an image url to their album.

const songs = [
  {
    name: "Megalovania",
    artist: "Toby Fox",
    genre: "game",
    image: "public/images/megalovania.jpg",
  },
  {
    name: "Clash Royale Theme Song",
    artist: "Carl V",
    genre: "game",
    image: "public/images/clashroyale.jpg",
  },
  {
    name: "Pigstep",
    artist: "Lena Raine",
    genre: "game",
    image: "public/images/pigstep.jpg",
  },
  {
    name: "Jumper",
    artist: "Waterflame",
    genre: "game",
    image: "public/images/jumper.webp",
  },
  {
    name: "Lifelight",
    artist: "Hideki Sakamoto",
    genre: "game",
    image: "public/images/lifelight.jpg",
  },
  {
    name: "Blinding Lights",
    artist: "The Weeknd",
    genre: "pop",
    image: "public/images/blindinglights.jpg",
  },
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    genre: "pop",
    image: "public/images/shapeofyou.webp",
  },
  {
    name: "Treat You Better",
    artist: "Shawn Mendes",
    genre: "pop",
    image: "public/images/treatyoubetter.jpg",
  },
  {
    name: "Clarity",
    artist: "Zedd ft. Foxes",
    genre: "edm",
    image: "public/images/clarity.jpg",
  },
  {
    name: "Animals",
    artist: "Martin Garrix",
    genre: "edm",
    image: "public/images/animals.jpg",
  },
  {
    name: "Don't You Worry Child",
    artist: "Swedish House Mafia",
    genre: "edm",
    image: "public/images/dontyouworrychild.jpg",
  },
  {
    name: "Silence",
    artist: "Marshmello ft. Khalid",
    genre: "edm",
    image: "public/images/silence.webp",
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    genre: "pop",
    image: "public/images/levitating.webp",
  },
  {
    name: "As It Was",
    artist: "Harry Styles",
    genre: "pop",
    image: "public/images/asitwas.jpg",
  },
  {
    name: "Hotel California",
    artist: "Eagles",
    genre: "rock",
    image: "public/images/hotelcalifornia.jpg",
  },
  {
    name: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "rock",
    image: "public/images/sweetchildomine.jpg",
  },
  {
    name: "Smells Like Teens Spirit",
    artist: "Nirvana",
    genre: "rock",
    image: "public/images/smellsliketeensspirit.jpg",
  },
  {
    name: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "rock",
    image: "public/images/bohemianrhapsody.webp",
  },
  {
    name: "Shelter",
    artist: "Porter Robinson & Madeon",
    genre: "edm",
    image: "public/images/shelter.jpg",
  },
  {
    name: "Back in Black",
    artist: "AC/DC",
    genre: "rock",
    image: "public/images/backinblack.jpg",
  },
];
const musicStore = document.querySelector(".musicLibrary");
const buttons = document.querySelector(".categories");

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

const filterbuttons = document.querySelectorAll(".categories");

function filtering() {
  let filteredSongs = [];
  filterbuttons.forEach((button) =>
    button.addEventListener("click", function (event) {
      const category = event.target.textContent.toLowerCase();
      if (category === "all") {
        filteredSongs = songs;
      } else {
        filteredSongs = songs.filter((song) => song.genre === category);
      }
      getSongs(filteredSongs);
    })
  );
}
filtering();

const playlist = [];
let total = 0;

document.addEventListener("click", function (find) {
  if (find.target.classList.contains("add")) {
    const skinName = find.target.dataset.name;
    const skinData = skins.find((skin) => skin.name === skinName);

    if (skinData) {
      playlist.push(skinData);
      document.querySelector(".playlistItems").insertAdjacentHTML(
        "beforeend",
        `
        <p>${skinData.name} - ${skinData.price} VP</p>
        `
      );
      total += skinData.price;
      document.querySelector(
        ".totalPrice"
      ).innerHTML = `<h3>Total: ${total} VP</h3>`;
    }
  }
});
