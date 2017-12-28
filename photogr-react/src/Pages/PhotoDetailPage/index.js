import React from 'react'
import PhotoDetailContainer from './container'
import { 
    PhotoDisplayBanner, 
    AuthorTile, 
    CommentTree 
} from '../../Core'
import { FlexItem, LinearLayout } from '../../Styles';

const PhotoDetailComponent = ({photo})=> 
  <div>
    <PhotoDisplayBanner photo={photo}/>
    <LinearLayout>
      <FlexItem flex={1}>
        {photo.author && <AuthorTile user={photo.author}/>}
      </FlexItem>
      <FlexItem flex={3}>
        93.00
      </FlexItem>
    </LinearLayout>
    {photo.comments && <CommentTree comments={photo.comments}/> }
  </div>

const PhotoDetailPage = PhotoDetailContainer(PhotoDetailComponent)

export default PhotoDetailPage