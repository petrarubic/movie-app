import { getImageBasePath } from "../../utils/getImageBasePath";
import { NoResultsWrapper } from "./styled";

const NoSearchResults = ({ label }) => {
  return (
    <NoResultsWrapper>
      <img
        src={getImageBasePath("popcorn-movie.png")}
        alt="No results"
        style={{ width: "80px", height: "80px" }}
      />
      <p>{label}</p>
    </NoResultsWrapper>
  );
};

export default NoSearchResults;
