import './GalleryItem.css';

function GalleryItem({galleryItem,}){

    return (
        <>
    <div className="body" >
    <img className="photoClass" src={galleryItem.path} alt={galleryItem.description}/>
    </div>

    <div>
    <button>Love it</button>
    </div>
    </>

    )
}

export default GalleryItem;