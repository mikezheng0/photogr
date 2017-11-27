import React from 'react'
import PhotoListItem from '../PhotoListItem'
import {LinearLayout} from '../../../Styles'
const PhotoList = ({photos, onClick, url}) => (
    <LinearLayout spaceBetween>
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
    </LinearLayout>
)

export default PhotoList