import './GalleryItem.css';

function GalleryItem({galleryItem, likedPhoto}){

    return (
        <>
    <div className="body" >
    <img className="photoClass" src={galleryItem.path} alt={galleryItem.description}/>
    </div>

    <div>
    <button onClick={()=> {likedPhoto(galleryItem)}}>Love it!</button>
    <p><span>{galleryItem.likes}</span>  likes on this!</p>
    </div>
    </>

    )
}

export default GalleryItem;