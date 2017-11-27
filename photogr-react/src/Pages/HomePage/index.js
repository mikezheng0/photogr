import React from 'react'
import { PhotoList } from '../../Core'
import Container from './container'

const HomeComponent = ({photos, onClick, url}) => 
(
    <div>
        <div>Featured Image</div>
        <PhotoList
            photos={photos}
            url={url}>
        </PhotoList>
    </div>
)



export default Container(HomeComponent)