import React from 'react'
import PhotoDetailContainer from './container'
import { 
    PhotoDisplayBanner, 
    AuthorTile, 
    CommentTree 
} from '../../Core'

const PhotoDetailComponent = ({photo})=> 
  <div>
    <PhotoDisplayBanner photo={photo}/>
    {photo.author && <AuthorTile user={photo.author}/>}
    {photo.comments && <CommentTree comments={photo.comments}/> }
  </div>

const PhotoDetailPage = PhotoDetailContainer(PhotoDetailComponent)

export default PhotoDetailPage