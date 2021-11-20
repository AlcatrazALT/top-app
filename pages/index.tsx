import React, { useState } from "react";
import { Button, Paragraph, Rating, Tag } from "../components";
import { withLayoutHOC } from "../layouts";

const Home = () => {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Button appearance='primary' arrow='down'>Click</Button>
      <Button appearance='ghost' arrow='right'>Click</Button>
      <Paragraph size='s'>Paragraph</Paragraph>
      <Paragraph size='m'>Paragraph</Paragraph>
      <Paragraph size='l'>Paragraph</Paragraph>
      <Tag size='s' color='green'>Tag</Tag>
      <Tag size='m' color='primary'>Tag</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
};

export default withLayoutHOC(Home);
