import React, { useState, useRef, useEffect } from "react";
import ReactPaginate from "react-paginate";

// STYLES
import { Main, StyledPaginateContainer } from "@Styles/main";

// COMPONENTS
import GitSearch from "@Components/GitSearch";
import Loading from "@Components/Loading";
import GitUserBoard from "@Components/GitUserBoard";
import UserNotFound from "@Components/UserNotFound";

// UTILS
import { getUserData } from "@Utils/api";

const GitMain = () => {
  // Set state variable (userInput) to store user search form input value
  const [userInput, setUserInput] = useState("");

  // Set state variable (userSearchResults) to store array of results from API call
  const [userSearchResults, setUserSearchResults] = useState([]);

  // Set state boolean variable (isSearchResults) to check if search results are available
  const [isQuery, setIsQuery] = useState(false);

  // Set state boolean variables for loading status while data is retrieved
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Set variable for catching fetch errors
  const [error, setError] = useState("");

  // Set variables needed for rendering pagination
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageRef = useRef(1);

  // Update userInput state based on input field changes
  const handleChange = (event) => {
    const userInputValue = event.target.value;
    setUserInput(userInputValue);
  };

  // Function for making API request
  const fetchUsers = () => {
    // Set loading status to true while data is being fetched
    setIsLoading(true);

    // Get data from API once component renders to the DOM
    fetch(
      `https://api.github.com/search/users?q=${userInput}&page=${currentPage}&per_page=6`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Something went wrong while processing this request");
      })
      .then((data) => {
        console.log(data, 'fextedData')
        // Update userSearchResults state with user search results
        setUserSearchResults(data);
        // Calculate total pages of results and set pageCount
        // GitHub Search API limit: "Only the first 1000 search results are available"
        let totalResults;
        if (data.total_count >= 1000) {
          totalResults = 1000;
        } else {
          totalResults = data.total_count;
        }
        let totalPages = Math.ceil(totalResults / 20.0);

        setPageCount(totalPages);
        // Set loading status to false
        setIsLoading(false);
        // Set isLoaded status to true to show ReactPaginate component
        setIsLoaded(true);
      })
      .catch((error) => setError(error.message));
  };

  // Get user data from API upon form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // Change value to true once form is submitted in order to trigger SearchResults component display
    setIsQuery(true);

    // Set loading status to true while data is being fetched
    setIsLoading(true);

    // Get data from API once component renders to the DOM
    fetchUsers();
  };

  // Set current page in response to pagination clicks in ReactPaginate component
  const handlePageClick = (event) => {
    let page = event.selected;
    // Add 1 since GitHub Search API results are 1-indexed
    setCurrentPage(page + 1);
  };

  // Fetch a specific page of user search results if pagination request changes (currentPage state)
  useEffect(() => {
    if (currentPage !== currentPageRef.current) {
      // Set loading status to true while data is being fetched
      setIsLoading(true);
      // Get data from API once component renders to the DOM
      fetch(
        `https://api.github.com/search/users?q=${userInput}&page=${currentPage}&per_page=6`
      )
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error("Something went wrong while processing this request");
        })
        .then((data) => {
          // Update userSearchResults state with user search results
          setUserSearchResults(data);
          // Set loading status to false
          setIsLoading(false);
          // Set isLoaded status to true to show ReactPaginate component
          setIsLoaded(true);
        })
        .catch((error) => setError(error.message));
      // Update currentPageRef
      currentPageRef.current = currentPage;
    }
  }, [currentPage, userInput]);
  console.log("userSearchResults \n\n:>> ", userSearchResults);
  return (
    <Main>
      <GitSearch
        onChange={handleChange}
        value={userInput}
        onSubmit={handleSubmit}
      />
      {!userSearchResults && isLoading && <Loading />}
      {isQuery && <GitUserBoard users={userSearchResults.items} />}
    
      {error && <UserNotFound error={error} />}
      {/* Only render ReactPaginate if data is loaded and pageCount is more than 1 */}
      {isLoaded && pageCount > 1 && (
        <StyledPaginateContainer>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          containerClassName={"pagination"}
          pageLinkClassName={"pagination__page"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          breakClassName={"page-break"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
        </StyledPaginateContainer>
      )}
    </Main>
  );
};

export default GitMain;
