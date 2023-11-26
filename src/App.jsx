import React from "react";
import "./App.css";

// Import Icon dari react-icons
import {
  GiGamepad,
  GiGameConsole,
  GiHealthPotion,
  GiRocket,
} from "react-icons/gi";

// Import Components Card Background
import CardBackground from "./component/card/CardBackground";

// Import Components Content
import Content from "./component/content/Content";

// Import Components Materi 1
import Materi1 from "./component/materi/Materi1.jsx";

// Import Components Materi 2
import Materi2 from "./component/materi/Materi2.jsx";

// Import Components Game 1
import Game1 from "./component/game/Game1.jsx";

// Import Components Game 2
import Game2 from "./component/game/Game2.jsx";

// Import Image untuk memanggil gambar
import Image from "./assets/Image.jsx";


const content = [
  {
    title: "SPIDER-MAN 2",
    image: Image.Poster1,
    platform: "PlayStation 5",
    release_date: "October 20, 2023",
    genre: "Fighting game, Action-adventure game",
  },
  {
    title: "ELDEN RING",
    image: Image.Poster2,
    platform: "PlayStation, Xbox, Microsoft Windows",
    release_date: "February 25, 2022",
    genre: "RPG, Dark Fantasy, Open World",
  },
  {
    title: "It Takes Two",
    image: Image.Poster3,
    platform: "PlayStation, Xbox, Nitendo, Microsoft Windows",
    release_date: "March 26, 2021",
    genre: "Co-op, Multiplayer, Split Screen",
  },
  {
    title: "The Legend of Zelda Breath of The Wild",
    image: Image.Poster4,
    platform: "Nitendo Switch, Wii U",
    release_date: "March 3, 2017",
    genre: " Action-adventure game, Puzzle Video Game",
  },
  {
    title: "Super Mario Bros. Wonder",
    image: Image.Poster5,
    platform: "Nintendo Switch",
    release_date: "October 20, 2023",
    genre: "Platform game",
  },
  {
    title: "Clash of Clans",
    image: Image.Poster6,
    platform: " Android, iOS",
    release_date: "August 2, 2012",
    genre: "Real-time strategy",
  },
];

function App() {
  return (
    <>
      {/* Container Landing Page */}
      <div className="container container-landing">
        <div className="contentLandingPage">
          <h1 className="text-center judul">Atma Jaya Game Center</h1>
          <p className="text">
            Unleash Your Playful Spirit at Atma Jaya Game Center
          </p>
        </div>
        {/* Icon Untuk hiasan */}
        <GiGamepad className="iconGamePad" />
        <GiGameConsole className="iconGameConsole" />
        <GiHealthPotion className="iconHealthPotion" />
        <GiRocket className="iconRocket" />
      </div>

      {/* Container bawah */}
      <div className="container container-content">
        <div>
          <h1 className="judulContent">Content Game</h1>
          {/* Custom HMTML Serta memanfaatkan children pada component*/}
          <CardBackground>
            <div className="row align-item-center kolom">
              {/* Map untuk menampilkan semua data content */}
              {content.map((item, index) => (
                // Custom Component untuk menampilkan data content
                <Content
                  key={index}
                  //Memasukkan data dari array content
                  title={item.title}
                  image={item.image}
                  platform={item.platform}
                  release_date={item.release_date}
                  genre={item.genre}
                />
              ))}
            </div>
          </CardBackground>
        </div>
      </div>

      {/* Container Untuk Materi 1 */}
      <div className="container container-content">
        <h1 className="judulContent">Materi 1</h1>
        <CardBackground>
          <Materi1 />
        </CardBackground>
      </div>

      {/* Container Untuk Materi 2 */}
      <div className="container container-content">
        <h1 className="judulContent">Materi 2</h1>
        <CardBackground>
          <Materi2 />
        </CardBackground>
      </div>

      {/* Container Untuk Game 1 */}
      <div className="container container-content">
        <h1 className="judulContent">Game 1</h1>
        <CardBackground>
          <Game1 />
        </CardBackground>
      </div>

      {/* Container Untuk Game 2 */}
      <div className="container container-content">
        <h1 className="judulContent">Game 2</h1>
        <CardBackground>
          <Game2 />
        </CardBackground>
      </div>
    </>
  );
}

export default App;