import React from 'react'

const PhotoDisplayBanner = ({photo}) => (
    <div>
        <img src={photo.src} alt={photo.title}/>
        <h2>{photo.title}</h2>
        <h4>{photo.description}</h4>
        <div>
            <span>Views: {photo.views} </span>
            <span>Favourites: {photo.favourites} </span>
        </div>
    </div>
)

export default PhotoDisplayBanner