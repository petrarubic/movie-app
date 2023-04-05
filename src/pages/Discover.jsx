import { useEffect } from "react";
import GenreMovieSlider from "../components/Slider/GenreMovieSlider";
import MovieSlider from "../components/Slider/MovieSlider";
import { getGenres, getLatestMovies } from "../service/api";
import { useMovieStore } from "../store/movie-store";
import { GridLayout, MovieDisplayWrapper } from "./styled";

const Discover = () => {
  const updateData = useMovieStore((state) => state.updateData);
  const genres = useMovieStore((state) => state.data.genres);

  useEffect(() => {
    async function getData() {
      const data = await getGenres();
      updateData({ genres: data });
    }
    getData();
  }, []);

  return (
    <GridLayout>
      <MovieDisplayWrapper>
        <h1>Latest Movies</h1>
        <MovieSlider queryName="getLatestMovies" movieFetch={getLatestMovies} />
        {genres?.map((genre) => (
          <div key={genre.id}>
            <h1>{genre.name}</h1>
            <GenreMovieSlider genreId={genre.id} />
          </div>
        ))}
      </MovieDisplayWrapper>
    </GridLayout>
  );
};

export default Discover;
