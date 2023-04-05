import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: auto;
  width: 100%;
  height: 100%;
`;

export const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
`;

export const DiscoverButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 150px;
  height: 20px;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(128, 95, 235, 1) 0%,
    rgba(164, 132, 252, 1) 35%,
    rgba(196, 179, 236, 1) 100%
  );
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 10px;

  &:hover {
    transition: 0.3 ease-in-out;
    box-shadow: 0px 10px 40px #805feb;
  }
`;
