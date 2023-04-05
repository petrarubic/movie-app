import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getMoviePosterImageUrl } from "../../service/api";
import { getImageBasePath } from "../../utils/getImageBasePath";
import IconButton, { IconState } from "../Button/IconButton";
import {
  existsInLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../Favorites/helper";
import { SliderItemWrapper } from "./styled";

const MovieSliderItem = ({ item }) => {
  const poster = getMoviePosterImageUrl(item);

  return (
    <SliderItemWrapper className="slider-item">
      <Link
        to={`/discover-movies/${item.id}`}
        style={{ textDecoration: "none" }}
      >
        <img
          src={poster ? poster : getImageBasePath("no-image.png")}
          alt="Movie backdrop"
          className="item-poster"
        />
      </Link>

      <IconButton
        activeIcon={
          existsInLocalStorage(item.id)
            ? IconState.SECONDARY
            : IconState.PRIMARY
        }
        primaryIcon={<FaRegStar />}
        secondaryIcon={<FaStar />}
        onClick={() => {
          existsInLocalStorage(item.id)
            ? removeFromLocalStorage(item.id)
            : saveToLocalStorage(item.id);
        }}
      />
    </SliderItemWrapper>
  );
};

export default MovieSliderItem;
