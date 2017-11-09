import React from 'react'
import PhotoDetailContainer from './container'
import { 
    PhotoDisplayBanner, 
    AuthorTile, 
    CommentTree 
} from '../../Core'

const PhotoDetailComponent = (props)=> (
    <div>
        {/*
        <RelatedTags></RelatedTags>
    */}
        <PhotoDisplayBanner photo={props.photo}></PhotoDisplayBanner>
        <AuthorTile user={props.photo.author}></AuthorTile>
        <CommentTree comments={props.photo.comments}></CommentTree> 
    </div>
)

const PhotoDetailPage = PhotoDetailContainer(PhotoDetailComponent)

export default PhotoDetailPage