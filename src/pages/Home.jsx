import TextContent from "../components/Text/TextContent";
import { Link } from "react-router-dom";
import { DiscoverButton, GridContent, GridLayout } from "./styled";
import { getImageBasePath } from "../utils/getImageBasePath";

const Home = () => {
  return (
    <GridLayout>
      <GridContent style={{ marginLeft: "150px" }}>
        <TextContent
          heading="Get lost in the world of movies."
          paragraph="MovieTime is your ultimate destination for browsing and discovering the latest and greatest movies. Explore our vast collection of movies and find your next cinematic adventure today."
        />
        <Link
          to="/discover-movies"
          style={{ textDecoration: "none", width: "150px" }}
        >
          <DiscoverButton>DISCOVER</DiscoverButton>
        </Link>
      </GridContent>
      <GridContent style={{ marginTop: "100px" }}>
        <img
          alt="Movie collage"
          src={getImageBasePath("movie.png")}
          style={{ height: "400px", width: "800px" }}
        />
      </GridContent>
    </GridLayout>
  );
};

export default Home;
