import React, (useEffect) from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';


function App() {
  useEffect(() => {
    fetchPhotos();
  })

  //GET route



  //

  console.log(galleryItems);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <img width="100" height="100 "src="images/sweetie.jpg"/>
      </div>
    );
}

export default App;
