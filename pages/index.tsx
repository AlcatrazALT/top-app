import { useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { HtagType } from "../components/Htag/Htag.props";

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Htag tag={HtagType.h1}>{counter}</Htag>
      <Button appearance='primary' onClick={() => setCounter(prev => prev + 1)}>Add</Button>
      <Button appearance='primary' arrow='down'>Click</Button>
      <Button appearance='ghost' arrow='right'>Click</Button>
      <Paragraph size='s'>Paragraph</Paragraph>
      <Paragraph size='m'>Paragraph</Paragraph>
      <Paragraph size='l'>Paragraph</Paragraph>
      <Tag size='s' color='green'>Tag</Tag>
      <Tag size='m' color='primary'>Tag</Tag>
      <Rating rating={4} />
    </>
  );
};

export default Home;
