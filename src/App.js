import React from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="app">
        <div className="app__header">
        <img
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="instagram"
        />
    </div>
      <h1>Teknikafa : Let's build an instagram clone!'</h1>
      <Post username="porti" caption="WOW it's works ü " imageUrl="https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" />
      <Post username="selman" caption="WOW it's works ü " imageUrl="https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" />
      <Post username="cleverQazi" caption="WOW it's works ü " imageUrl="https://www.freecodecamp.org/news/content/images/size/w600/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" />
    </div>
  );
}

export default App;
