import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieBackdropImageUrl, getMovieDetails } from "../service/api";
import { useMovieStore } from "../store/movie-store";
import { getImageBasePath } from "../utils/getImageBasePath";
import {
  BackdropImageWrapper,
  BannerContent,
  GenreTab,
  GridColumn,
  GridLayout,
  Label,
} from "./styled";
import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa";
import IconButton, { IconState } from "../components/Button/IconButton";
import {
  existsInLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../components/Favorites/helper";
import EmptyMovieState from "../components/EmptyMovieState/EmptyMovieState";

const Movie = () => {
  const { id } = useParams();
  const updateData = useMovieStore((state) => state.updateData);
  const movie = useMovieStore((state) => state.data.selectedMovie);
  const [backdropImage, setBackdropImage] = useState(undefined);

  useEffect(() => {
    async function getData() {
      const data = await getMovieDetails(id);
      updateData({ selectedMovie: data });
      setBackdropImage(getMovieBackdropImageUrl(data));
    }
    getData();
  }, [id]);

  return movie ? (
    <GridLayout>
      <BackdropImageWrapper
        backgroundImage={
          backdropImage ? backdropImage : getImageBasePath("no-image.png")
        }
      >
        <BannerContent>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "32px", fontWeight: 700 }}>
              {movie?.title || movie.name || movie?.original_name}
            </span>
            <span style={{ fontSize: "22px" }}>
              ({new Date(movie?.release_date).getFullYear()})
            </span>
            <IconButton
              activeIcon={
                existsInLocalStorage(movie.id)
                  ? IconState.SECONDARY
                  : IconState.PRIMARY
              }
              primaryIcon={<FaRegStar />}
              secondaryIcon={<FaStar />}
              onClick={() => {
                existsInLocalStorage(movie.id)
                  ? removeFromLocalStorage(movie.id)
                  : saveToLocalStorage(movie.id);
              }}
            />
          </div>
          <p>{movie?.tagline}</p>
        </BannerContent>
      </BackdropImageWrapper>
      <GridColumn>
        <Label>DESCRIPTION</Label>
        <p>{movie?.overview}</p>
        <Label>RUNTIME</Label>
        <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <FaRegClock />
          <span>{movie?.runtime} min</span>
        </p>
      </GridColumn>
      <GridColumn>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Label>IMDb RATING</Label>
          <p>{parseFloat(movie?.vote_average).toFixed(1)}</p>
        </div>
        <Label>GENRES</Label>
        <div style={{ display: "flex", gap: "10px" }}>
          {movie?.genres.map((g) => (
            <GenreTab>{g.name}</GenreTab>
          ))}
        </div>
      </GridColumn>
    </GridLayout>
  ) : (
    <EmptyMovieState />
  );
};

export default Movie;
