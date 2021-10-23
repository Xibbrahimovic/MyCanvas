import './GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({list, fetchPhotos}) {
    return(<>
    <div className="listDiv">
        {
            list.map(galleryItem =>(
                <GalleryItem
                key={galleryItem.id}
                fetchPhotos={fetchPhotos}
                galleryItem={galleryItem}
                // likedPhoto={likedPhoto}
                />
            ))
        }
        </div>
    </>
    )
}

export default GalleryList;
