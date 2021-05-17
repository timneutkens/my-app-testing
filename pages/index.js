import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  return (
    <>
      <h1>{props.date}</h1>
      <pre>{JSON.stringify(router, null, " ")}</pre>
    </>
  );
}

export async function getStaticProps() {
  return {
    revalidate: 1,
    props: {
      date: new Date().toString(),
    },
  };
}
