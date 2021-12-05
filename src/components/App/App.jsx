import React, {useEffect} from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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

  const likedPhoto = (galleryItem) => {
    axios({
      method: 'PUT',
      url: `gallery/like/${galleryItem.id}` 
      //route is needed to each individual photo based on id
    })
    .then((response) => {
      console.log('Update liked photo');
      fetchPhotos();
      //rerender photos after updating to get the counter
    })
    .catch((error) => {
      console.log('Error updating liked item', error);
    });
  }

 console.log(galleryList);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Canvas</h1>
        </header>

        <h2></h2>
        <GalleryList
          list={galleryList}
          fetchPhotos={fetchPhotos}
          likedPhoto={likedPhoto}
          />
      </div>
    );
}

export default App;
