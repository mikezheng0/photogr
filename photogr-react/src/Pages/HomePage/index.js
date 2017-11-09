import React from 'react'
import { PhotoList } from '../../Core'
import Container from './container'

const HomeComponent = ({mockImages, onClick, url}) => 
        (
        <div>
            <div>Featured Image</div>
            <PhotoList
                photos={mockImages}
                onClick={onClick}
                url={url}>
            </PhotoList>
        </div>
        )
    

    
const HomePage = Container(HomeComponent)

export default HomePage