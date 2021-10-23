import React, {useEffect} from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


function App() {

  useEffect(() => {
    fetchPhotos();
  }, []);

  let [galleryList, setGalleryList] = useState([]);


  //GET route
  const fetchPhotos  = () => {
    axios({
      method: "GET",
      url: '/gallery'
    })
    .then((response) => {
      console.log('entire response', response);
      setGalleryList(response.data);
    })
    .catch(function(error) {
      console.log(`Error on get`, error);
    })
  }//end FETCH/GET list

 console.log(galleryList);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <h2>Gallery goes here</h2>
        <GalleryList
          list={galleryList}
          fetchPhotos={fetchPhotos}
          // likedPhoto={likedPhoto}
          />
      </div>
    );
}

export default App;
