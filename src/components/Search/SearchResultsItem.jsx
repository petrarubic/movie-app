import { getMoviePosterImageUrl } from "../../service/api";
import { getImageBasePath } from "../../utils/getImageBasePath";
import { SearchResultsItemWrapper } from "./styled";

const SearchResultsItem = ({ item }) => {
  const poster = getMoviePosterImageUrl(item);
  const releaseYear = new Date(item.release_date).getFullYear();

  return (
    <SearchResultsItemWrapper>
      <img
        src={poster ? poster : getImageBasePath("no-image.png")}
        alt="Movie backdrop"
        className="item-poster"
      />
      <div>
        <p>{item.title}</p>
        <p>{releaseYear}</p>
      </div>
    </SearchResultsItemWrapper>
  );
};

export default SearchResultsItem;
