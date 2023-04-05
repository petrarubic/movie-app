import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import MovieSliderItem from "./MovieSliderItem";
import { SliderWrapper } from "./styled";

const MovieSlider = ({ queryName, movieFetch }) => {
  const { data, fetchNextPage, isFetchingNextPage, isError, isLoading, error } =
    useInfiniteQuery([queryName], movieFetch, {
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : false,
    });

  const movies = data?.pages.reduce(
    (result, page) => result.concat(page.results),
    []
  );

  return (
    <InfiniteScroll
      dataLength={movies?.length ?? 0}
      next={fetchNextPage}
      hasMore={isFetchingNextPage}
      scrollableTarget="slider-wrapper"
    >
      <SliderWrapper id="slider-wrapper">
        {!data && !isLoading && <p>No results</p>}
        {movies?.length === 0 && <p>No movies</p>}
        {movies?.map((movie) => (
          <div key={movie.id}>
            <MovieSliderItem item={movie} />
          </div>
        ))}
        {isLoading && <p>Loading</p>}
        {isError && <div>Error: {error.message}</div>}
      </SliderWrapper>
    </InfiniteScroll>
  );
};

export default MovieSlider;
