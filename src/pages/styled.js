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

export const BackdropImageWrapper = styled.header`
  grid-column: 1/-1;
  height: 500px;
  background-size: cover;
  background-image: ${(props) => `url("${props.backgroundImage}")`},
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-blend-mode: overlay;
  background-position: 50% 10%;
`;

export const BannerContent = styled.div`
  width: 100%;
  padding: 50px;
  font-size: 24px;
`;

export const Label = styled.p`
  font-family: "Fredoka One";
  color: #8f70f2;
`;

export const GridColumn = styled.div`
  padding: 50px;
`;

export const GenreTab = styled.div`
  background-color: #1f1f1f;
  color: gray;
  padding: 5px 10px;
  border-radius: 20px;
`;

export const PageNotFoundHeading = styled.div`
  grid-column: 1/-1;
  padding-top: 100px;
  font-size: 120px;
  text-align: center;
  font-family: "Fredoka One";
  background: linear-gradient(
    90deg,
    rgba(128, 95, 235, 1) 0%,
    rgba(164, 132, 252, 1) 35%,
    rgba(196, 179, 236, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PageNotFoundSubheading = styled.div`
  grid-column: 1/-1;
  font-size: 18px;
  text-align: center;
`;

export const MovieDisplayWrapper = styled.div`
  grid-column: 1/-1;
  padding: 50px;
`;
