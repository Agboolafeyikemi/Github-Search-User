import React from "react";

// STYLES
import {
  UserContainer,
  UserPic,
  Box,
  UserName,
  UserDetails,
  RepoButton,
  RepoLink,
  OnHover,
  Profile,
  ProfileImage,
  ProfileName,
} from "@Styles/main";

const GitUserBoard = ({ users }) => (
  <UserContainer>
    {users?.map((user, index) => {
      return (
        <Profile key={index}>
          <ProfileImage>
            <UserPic src={user.avatar_url} alt="Github user profile pic" />
          </ProfileImage>
          <ProfileName>
            <UserName> {user.login}</UserName>
          </ProfileName>
          <OnHover>
            <Box>
              <UserDetails>
                Score: <span>{user.score}</span>
              </UserDetails>
            </Box>
            <UserDetails>
              Type: <span>{user.type}</span>
            </UserDetails>
            <RepoButton>
              <RepoLink href={user.html_url} target="_blank">
                Profile Link
              </RepoLink>
            </RepoButton>
          </OnHover>
        </Profile>
      );
    })}
  </UserContainer>
);

export default GitUserBoard;
