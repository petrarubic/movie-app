import {
  GridLayout,
  PageNotFoundHeading,
  PageNotFoundSubheading,
} from "./styled";

const PageNotFound = () => {
  return (
    <GridLayout>
      <PageNotFoundHeading>404</PageNotFoundHeading>
      <PageNotFoundSubheading>
        Page you are looking for doesn't exist.
      </PageNotFoundSubheading>
    </GridLayout>
  );
};

export default PageNotFound;
