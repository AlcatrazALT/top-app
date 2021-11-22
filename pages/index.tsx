import React, { useState } from "react";
import { Button, Paragraph, Rating, Tag } from "../components";
import { withLayoutHOC } from "../layouts";

const Home = () => {
  const [rating, setRating] = useState(4);

  return (
    <>
      <h4>Body</h4>
    </>
  );
};

export default withLayoutHOC(Home);
