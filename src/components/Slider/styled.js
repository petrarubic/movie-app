import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  padding: 30px 0px;
  overflow-y: hidden;
  overflow-x: scroll;
  z-index: 10;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SliderItemWrapper = styled.div`
  object-fit: contain;
  width: 120px;
  height: 200px;
  transition: transform 300ms ease 100ms;

  .item-poster {
    width: 100%;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
