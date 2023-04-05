import { useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { searchMovies } from "../../service/api";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  SearchClearIndicator,
  SearchInputWrapper,
  SearchLoader,
  SearchResultsWrapper,
  SearchWrapper,
} from "./styled";
import SearchResultsItem from "./SearchResultsItem";
import { useClickOutside } from "../../utils/useClickOutside";
import { FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoSearchResults from "./NoSearchResults";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchPopupRef = useRef(null);
  useClickOutside(searchPopupRef, () => setIsOpen(false));

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const { data, fetchNextPage, isFetchingNextPage, isError, isLoading, error } =
    useInfiniteQuery(
      ["searchMovies", query],
      ({ pageParam = 1 }) => searchMovies(query, pageParam),
      {
        getNextPageParam: (lastPage) =>
          lastPage.page < lastPage.total_pages ? lastPage.page + 1 : false,
        enabled: query !== "",
      }
    );

  const movies = data?.pages.reduce(
    (result, page) => result.concat(page.results),
    []
  );

  return (
    <SearchWrapper ref={searchPopupRef}>
      <SearchInputWrapper>
        <FaSearch />
        <input
          type="text"
          placeholder="Search movies"
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          value={query}
          className="search-input"
        />
        <SearchClearIndicator
          onClick={() => setQuery("")}
          isVisible={query.length > 0}
        >
          <FaTimes />
        </SearchClearIndicator>
      </SearchInputWrapper>

      {isOpen && (
        <SearchResultsWrapper>
          <InfiniteScroll
            dataLength={movies?.length ?? 0}
            next={fetchNextPage}
            hasMore={isFetchingNextPage}
          >
            <ul className="search-results-list">
              {!data && !isLoading && <NoSearchResults label="No results" />}
              {movies?.length === 0 && (
                <NoSearchResults label="No matching movies" />
              )}
              {movies?.map((movie) => (
                <li key={movie.id}>
                  <Link
                    to={`/discover-movies/${movie.id}`}
                    onClick={() => setIsOpen(false)}
                    style={{ textDecoration: "none" }}
                  >
                    <SearchResultsItem item={movie} />
                  </Link>
                </li>
              ))}
              {isLoading && <SearchLoader>Loading</SearchLoader>}
              {isError && <div>Error: {error.message}</div>}
            </ul>
          </InfiniteScroll>
        </SearchResultsWrapper>
      )}
    </SearchWrapper>
  );
};

export default Search;
