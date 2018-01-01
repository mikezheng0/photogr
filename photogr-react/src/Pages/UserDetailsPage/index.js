import React from "react";
import Container from "./container";
import { PhotoList, LargeProfile } from "../../Core";
import { AddPhotoModal, withModal } from "../../Modal";
import { LinearLayout, FlexItem, Button } from "../../Styles";

const UserDetailsComponent = ({
  url,
  user,
  onClickPhoto,
  isOpen,
  handleBodyClick,
  handleOverlayClick,
  openModal
}) => (
  <LinearLayout vertical>
    {user.contactInformation && <LargeProfile user={user} />}

    <FlexItem>
      <Button onClick={openModal}>New Photo</Button>
    </FlexItem>
    <AddPhotoModal
      isOpen={isOpen}
      handleOverlayClick={handleOverlayClick}
      handleBodyClick={handleBodyClick}
    />
    {user.photos && (
      <PhotoList photos={user.photos} url={url} onClick={onClickPhoto} />
    )}
  </LinearLayout>
);

export default Container(withModal(UserDetailsComponent));
