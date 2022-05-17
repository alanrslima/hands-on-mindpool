import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layer from "../components/Layer";

const Home: NextPage = () => {
  const router = useRouter();

  const onClickStartButton = () => {
    router.push("/survey", undefined, { shallow: true });
  };

  return (
    <Layer
      title={`Welcome to\nGraypool`}
      button={{ title: "Start", onClick: onClickStartButton }}
    />
  );
};

export default Home;
