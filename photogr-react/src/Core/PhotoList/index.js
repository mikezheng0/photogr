import React from 'react'
import PhotoListItem from '../PhotoListItem'
const PhotoList = ({photos, onClick, url}) => (
    <div>
        {
            photos.map(
                (photo)=>(
                    <PhotoListItem 
                        key={photo.id} 
                        photo={photo}
                        onClick={onClick}
                        url={url}>
                    </PhotoListItem>
                )
            )
        }
    </div>
)

export default PhotoList