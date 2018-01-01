import React from "react";
import {
  LinearLayout,
  ImageContainer,
  justifyEnd,
  BannerContainer
} from "../../../Styles";
const JustifyEndLinearLayout = justifyEnd(LinearLayout);
const PhotoDisplayBanner = ({ photo }) => (
  <BannerContainer>
    <ImageContainer>
      <img src={photo.path} alt={photo.title} />
    </ImageContainer>
    <LinearLayout>
      <LinearLayout vertical>
        <h2>{photo.title}</h2>
        <h4>{photo.description}</h4>
      </LinearLayout>
      <JustifyEndLinearLayout centerAlign>
        <div>Views: {photo.views} </div>
        <div>Favourites: {photo.favourites} </div>
      </JustifyEndLinearLayout>
    </LinearLayout>
  </BannerContainer>
);

export default PhotoDisplayBanner;
