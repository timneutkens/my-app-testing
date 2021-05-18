import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return <pre>{JSON.stringify(router, null, " ")}</pre>;
}

export async function getServerSideProps() {
  return {
    props: {
      ssr: true,
    },
  };
}
