import React from "react";

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
} from "@Styles/main";

const GitUserBoard = ({ userProfile }) => {
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    user_starsCount,
    location,
    blog,
    company,
    twitter_username,
  } = userProfile;

  return <UserContainer></UserContainer>;
};

export default GitUserBoard;
