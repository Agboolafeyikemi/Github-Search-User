import React from "react";

import styled from 'styled-components';

// ICONS
import { MdLocationOn, MdLink, MdOutlineApartment } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

// STYLES
import {
  UserContainer,
  UserBoardHeader,
  UserPic,
  UserWrapper,
  Box,
  UserRealName,
  UserName,
  UserJoinedDate,
  UserBoardAbout,
  UserBio,
  UserStats,
  UserStatsType,
  UserBoardFooter,
  UserLinkList,
  UserFooterItem,
  UserFooterLink,
  Profile,
  ProfileImage,
  ProfileName
} from "@Styles/main";
import { padding } from "polished";

// Adapting based on props
const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));

const GitUserBoard = ({ users }) => {
  // const {items} = users || {}
  console.log(users , 'Users\n\n\n\n\n\n\n\nGitUserBoard\n\n\n', '\n\n\n\n\n\n\n\nGitUserBoard\n\n\n')
  users?.map((user, index) => console.log(user.login,'GODOOOO\m\n\n\n\n\n\n\nCONSOLE.LOG\n\n\n\n\n\n\n\n\n'))

 
 return( 
 <UserContainer>
  {users?.map((user, index) => {
   return  <div>
     <Profile key={index}>
     <ProfileImage>
     <UserPic>{user.avater_url}</UserPic>
     </ProfileImage>
     <ProfileName>
     <UserName> {user.login}</UserName >
     </ProfileName>
    </Profile>
  </div>
  })}
  </UserContainer>)
};

export default GitUserBoard;
