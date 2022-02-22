import React from "react";

// IMAGES
import octocat from "@Images/octocat-not-found.png";

// STYLES
import {
  NotFoundContainer,
  NotFoundPic,
  NotFoundWrapper,
  NotFoundText,
} from "@Styles/main";

const UserNotFound = ({ error }) => {
  return (
    <NotFoundContainer>
      <NotFoundPic src={octocat} alt="GitHub mascot dressed like Wally" />
      <NotFoundWrapper>
        <NotFoundText>
          <span>Oooh no!</span>
          <span>{error}</span>
        </NotFoundText>
      </NotFoundWrapper>
    </NotFoundContainer>
  );
};

export default UserNotFound;
