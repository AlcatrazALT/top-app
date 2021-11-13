import { Button, Htag, Paragraph } from "../components";
import { HtagType } from "../components/Htag/Htag.props";

export default function Home() {
  return (
    <>
      <Htag tag={HtagType.h1}>Text</Htag>
      <Button appearance='primary' arrow='down'>Click</Button>
      <Button appearance='ghost' arrow='right'>Click</Button>
      <Paragraph size='s'>Paragraph</Paragraph>
      <Paragraph size='m'>Paragraph</Paragraph>
      <Paragraph size='l'>Paragraph</Paragraph>
    </>
  );
}
