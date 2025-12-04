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

let songs = [
  {
    name: "Megalovania",
    artist: "Toby Fox",
    genre: "game",
    image: "/images/megalovania.jpg",
  },
  {
    name: "Clash Royale Theme Song",
    artist: "Carl V",
    genre: "game",
    image: "/images/clashroyale.jpg",
  },
  {
    name: "Pigstep",
    artist: "Lena Raine",
    genre: "game",
    image: "/images/pigstep.jpg",
  },
  {
    name: "Jumper",
    artist: "Waterflame",
    genre: "game",
    image: "/images/jumper.webp",
  },
  {
    name: "Lifelight",
    artist: "Hideki Sakamoto",
    genre: "game",
    image: "/images/lifelight.jpg",
  },
  {
    name: "Blinding Lights",
    artist: "The Weeknd",
    genre: "pop",
    image: "/images/blindinglights.jpg",
  },
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    genre: "pop",
    image: "/images/shapeofyou.webp",
  },
  {
    name: "Treat You Better",
    artist: "Shawn Mendes",
    genre: "pop",
    image: "/images/treatyoubetter.jpg",
  },
  {
    name: "Clarity",
    artist: "Zedd ft. Foxes",
    genre: "edm",
    image: "/images/clarity.jpg",
  },
  {
    name: "Animals",
    artist: "Martin Garrix",
    genre: "edm",
    image: "/images/animals.jpg",
  },
  {
    name: "Don't You Worry Child",
    artist: "Swedish House Mafia",
    genre: "edm",
    image: "/images/dontyouworrychild.jpg",
  },
  {
    name: "Silence",
    artist: "Marshmello ft. Khalid",
    genre: "edm",
    image: "/images/silence.webp",
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    genre: "pop",
    image: "/images/levitating.webp",
  },
  {
    name: "As It Was",
    artist: "Harry Styles",
    genre: "pop",
    image: "/images/asitwas.jpg",
  },
  {
    name: "Hotel California",
    artist: "Eagles",
    genre: "rock",
    image: "/images/hotelcalifornia.jpg",
  },
  {
    name: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    genre: "rock",
    image: "/images/sweetchildomine.jpg",
  },
  {
    name: "Smells Like Teens Spirit",
    artist: "Nirvana",
    genre: "rock",
    image: "/images/smellsliketeensspirit.jpg",
  },
  {
    name: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "rock",
    image: "/images/bohemianrhapsody.webp",
  },
  {
    name: "Shelter",
    artist: "Porter Robinson & Madeon",
    genre: "edm",
    image: "/images/shelter.jpg",
  },
  {
    name: "Back in Black",
    artist: "AC/DC",
    genre: "rock",
    image: "/images/backinblack.jpg",
  },
];
const musicStore = document.querySelector(".musicLibrary");
const playlistSongsContainer = document.querySelector(".playlistSongs");
const playlistSection = document.querySelector(".playlist");
const playlistCountElement = document.querySelector(".playlistCount");
const songForm = document.querySelector("#addSongForm");

function getSongs(currentSongs) {
  musicStore.innerHTML = "";
  currentSongs.forEach((song) => {
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
  filterbuttons.forEach((button) =>
    button.addEventListener("click", function (event) {
      const category = event.target.textContent.toLowerCase();
      let filteredSongs;
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

function updatePlaylistDisplay() {
  playlistSongsContainer.innerHTML = "";
  let count = 0;

  playlist.forEach((songData) => {
    count++;
    playlistSongsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="songs" data-genre="${songData.genre}" data-name="${songData.name}">
        <h2 class="song">${songData.name}</h2>
        <img src="${songData.image}" alt="${songData.name}" />
        <button class="btn song remove" data-name="${songData.name}">Remove from Playlist</button>
      </div>
      `
    );
  });

  playlistCountElement.textContent = `(${count} songs)`;

  if (playlist.length > 0) {
    playlistSection.classList.remove("hidden");
  } else {
    playlistSection.classList.add("hidden");
  }
}
updatePlaylistDisplay();

document.addEventListener("click", function (find) {
  const songName = find.target.dataset.name;

  if (find.target.classList.contains("add")) {
    const songData = songs.find((song) => song.name === songName);

    // Prevent duplicate entries
    if (!playlist.find((song) => song.name === songName)) {
      playlist.push(songData);
      updatePlaylistDisplay();
    } else {
      alert(`${songName} is already in the playlist!`);
    }
  } else if (find.target.classList.contains("remove")) {
    // 1. Find the index of the song to remove
    const songIndex = playlist.findIndex((song) => song.name === songName);

    if (songIndex !== -1) {
      // 2. Remove the song from the array
      playlist.splice(songIndex, 1);

      // 3. Update the display
      updatePlaylistDisplay();
    }
  }
});

// --- Theme Toggle ---

document
  .querySelector(".btn-theme-toggle")
  .addEventListener("click", function () {
    if (document.body.classList.contains("cool")) {
      document.body.classList.add("warm");
      document.body.classList.remove("cool");
    } else {
      document.body.classList.add("cool");
      document.body.classList.remove("warm");
    }
  });

// --- New Song Submission ---

songForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop the form from refreshing the page

  // Get input values
  const name = document.getElementById("songName").value;
  const artist = document.getElementById("artistName").value;
  const genre = document.getElementById("songGenre").value.toLowerCase().trim();
  const image = document.getElementById("imageUrl").value;

  // Validation (basic check if fields are filled)
  if (!name || !artist || !genre || !image) {
    alert("Please fill in all fields to add a new song.");
    return;
  }

  // Check if the song already exists (using a simple name check)
  if (songs.some((song) => song.name.toLowerCase() === name.toLowerCase())) {
    alert(`The song "${name}" is already in the music store.`);
    return;
  }

  // Create new song object
  const newSong = {
    name: name,
    artist: artist,
    // Using lowercase for genre makes filtering consistent
    genre: genre,
    // Using the URL directly from the input
    image: image,
  };

  // Add the new song to the main array
  songs.push(newSong);

  // Update the display of the music store
  getSongs(songs);

  // Optional: Clear the form
  songForm.reset();
});
