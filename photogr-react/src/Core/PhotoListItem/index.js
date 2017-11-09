import React from 'react'
import {Button} from '../../Styles'
import {Link} from 'react-router-dom'

const PhotoListItem = ({photo, onClick, url}) => (
    <div>
        <div onClick={()=>{onClick(photo.id)}}>
            <Link to={`${url}/${photo.id}`}>
                <img src={photo.path} alt="Smiley face"/>
            </Link>
        </div>
        <Button>Like</Button>
        <Button>Comment</Button>
        <Button>More</Button>
    </div>
)

export default PhotoListItem