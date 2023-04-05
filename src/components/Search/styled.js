import styled, { keyframes } from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-flex;
  margin: 0 50px;
  width: 200px;
  z-index: 40;
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 10px;
  background-color: #1f1f1f;
  border-radius: 5px;
  padding: 10px;
  color: gray;

  .search-input {
    background-color: transparent;
    color: white;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

export const SearchResultsWrapper = styled.div`
  position: absolute;
  width: 500px;
  height: 200px;
  overflow-y: scroll;
  top: 50px;
  right: -15px;
  background-color: #1f1f1f;
  border-radius: 5px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .search-results-list {
    width: 100%;
    list-style: none;
    gap: 10px;
    padding: 0;
  }
`;

export const SearchResultsItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  padding: 20px;
  color: white;

  &:hover {
    background-color: #313131;

    .item-poster {
      transform: scale(1.1);
      z-index: 1;
    }
  }

  .item-poster {
    width: 85px;
    height: 120px;
    border-radius: 5px;
    transition: transform 500ms;
  }
`;

export const NoResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SearchClearIndicator = styled.div`
  cursor: pointer;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};

  &:hover {
    color: white;
  }
`;

const dots = keyframes`
 0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}
`;

export const SearchLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &:after {
    content: " .";
    animation: ${dots} 1s steps(5, end) infinite;
  }
`;
