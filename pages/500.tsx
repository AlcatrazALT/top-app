import { Htag } from "../components";
import { withLayoutHOC } from "../layouts";

const Error500 = (): JSX.Element => {
  return (
    <>
      <Htag tag="h1">Error500</Htag>
    </>
  );
};

export default withLayoutHOC(Error500);
