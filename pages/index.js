import { server } from "../config";
import SkyEditor from "../components/SkyEditor";

export default function Home() {
  return (
    <div>
      <SkyEditor />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
