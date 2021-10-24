import "./GalleryItem.css";
import { useState } from "react";
// import Heart from "react-animated-heart";


function GalleryItem({ galleryItem, likedPhoto }) {
    let [revealDescription, setRevealDescription] = useState(false);
    // const [isClick, setClick] = useState(false);


    const toggleDescription = () => {
        setRevealDescription(!revealDescription);}; //set state to opposite when photo is clicked
        console.log(revealDescription);



  return (
    <div class="frame">
      <div className="container">
        {/* Assigns transparent to each photo if clicked */}
        <img className={revealDescription ? "transparent photoClass " : "photoClass"
}
          src={galleryItem.path}
          alt={galleryItem.description}
          onClick={toggleDescription}
        />
        {/* if revealDescription is true, toggle description and class */}
        {revealDescription && (<div 
            className="photoInfo">
            {galleryItem.description}
            </div>)}
        </div>
        {/* end container class */}

        {galleryItem.likes ? <p><span className="textFont"> {galleryItem.likes} </span> ❤️'s on this!</p> : 
        <p className="textFont">Be the first to love it!  ❤️</p>} 
        <div>
            <button className="likeBtn" onClick={() => {likedPhoto(galleryItem);}}>
             LOVE<i className="" style={{ color: "white" }}></i>
            </button>
        </div>
    </div>
  );
}

export default GalleryItem;
