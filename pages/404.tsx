import { Htag } from "../components";
import { withLayoutHOC } from "../layouts";

export const Error404 = (): JSX.Element => {
  return (
    <>
      <Htag tag="h1">Error 401</Htag>
    </>
  );
};

export default withLayoutHOC(Error404);
