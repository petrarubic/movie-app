import { GridLayout } from "../../pages/styled";
import { getImageBasePath } from "../../utils/getImageBasePath";
import { EmptyMovieStateHeading, EmptyMovieStateWrapper } from "./styled";

const EmptyMovieState = () => {
  return (
    <GridLayout>
      <EmptyMovieStateWrapper>
        <img
          src={getImageBasePath("clapperboard.png")}
          alt="No movie data"
          style={{ width: "240px", height: "240px" }}
        />
        <EmptyMovieStateHeading>
          Movie data doesn't exist yet.
        </EmptyMovieStateHeading>
      </EmptyMovieStateWrapper>
    </GridLayout>
  );
};

export default EmptyMovieState;
