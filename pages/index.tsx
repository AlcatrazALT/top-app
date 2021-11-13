import { Button, Htag } from "../components";
import { HtagType } from "../components/Htag/Htag.props";

export default function Home() {
  return (
    <>
      <Htag tag={HtagType.h1}>Text</Htag>
      <Button appearance='primary'>Click</Button>
      <Button appearance='ghost'>Click</Button>
    </>
  );
}
