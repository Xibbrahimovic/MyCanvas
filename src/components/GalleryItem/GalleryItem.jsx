import "./GalleryItem.css";
import { useState } from "react";

function GalleryItem({ galleryItem, likedPhoto }) {
  let [revealDescription, setRevealDescription] = useState(false);

  const toggleDescription = () => {
    setRevealDescription(!revealDescription);
  }; //set state to opposite when photo is clicked

  console.log(revealDescription);

  return (
    <div class="frame">
      <div className="container">
        {/* Assigns transparent to each photo if clicked */}
        <img className={
            revealDescription ? "transparent photoClass " : "photoClass"
          }
          src={galleryItem.path}
          alt={galleryItem.description}
          onClick={toggleDescription}
        />
        {/* if revealDescription is true, toggle description and class */}
        {revealDescription && (
          <div className="photoInfo">{galleryItem.description}</div>
        )}
      </div>
      {/* end container class */}

      <div>
        <button onClick={() => {likedPhoto(galleryItem);}}> Love it!
        </button>
      </div>
        {galleryItem.likes ? <p><span> {galleryItem.likes} </span>likes on this!</p> : 
        <p> Nobody likes this :( </p>} 
    </div>
  );
}

export default GalleryItem;
