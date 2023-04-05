import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 200px;
  z-index: 40;
`;

export const DropdownButton = styled.div`
  width: 110px;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-left: 50px;
  margin-top: 10px;
  color: gray;
  cursor: pointer;

  &:hover {
    color: #8f70f2;
  }
`;

export const DropdownListWrapper = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  overflow-y: scroll;
  top: 50px;
  right: -5px;
  background-color: #1f1f1f;
  border-radius: 5px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .favorites-list {
    width: 100%;
    list-style: none;
    gap: 10px;
    padding: 20px;
  }
`;
