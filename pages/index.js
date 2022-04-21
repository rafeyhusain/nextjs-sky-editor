import Editor from "../components/Editor/Editor";

export default function Home() {
  return (
    <div>
      <Editor />
    </div>
  );
}

export const getStaticProps = async () => {
  //const res = await fetch(`${server}/api/articles`);
  //const articles = await res.json();
  const articles = {};

  return {
    props: {
      articles,
    },
  };
};
