import React from 'react'
import {Button, Card, FlexItem,LinearLayout} from '../../../Styles'
import {Link} from 'react-router-dom'

const PhotoListItem = ({photo, url}) => (
    <Card>
        <div>
            <Link to={`/${url}/${photo.id}`}>
                <img src={photo.path} alt={photo.path}/>
            </Link>
        </div>
        <LinearLayout horizontal>
          <FlexItem>
            <Button>Like</Button>
            <Button>Comment</Button>
          </FlexItem>
          <Button>More</Button>
        </LinearLayout>
    </Card>
)

export default PhotoListItem