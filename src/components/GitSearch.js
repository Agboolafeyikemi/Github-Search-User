import React, { useState, useEffect, useRef } from "react";

// ICONS
import { RiSearchLine } from "react-icons/ri";

// IMAGE
import usernameRules from "@Images/github-username-composition-rules.png";

// STYLES
import {
  SearchContainer,
  SearchForm,
  SearchField,
  SearchButton,
  SearchErrorMsg,
  SearchErrorLink,
  Wrapper,
} from "@Styles/main";

const GitSearch = ({ onChange, value, onSubmit }) => {
  return (
    <>
      <SearchContainer>
        <SearchForm onSubmit={onSubmit}>
          <Wrapper>
            <RiSearchLine size={30} />
            <SearchField
              placeholder="Github username"
              value={value}
              onChange={(e) => onChange(e)}
              required
            />
          </Wrapper>
          <SearchButton>Search</SearchButton>
        </SearchForm>
      </SearchContainer>
    </>
  );
};

export default GitSearch;
