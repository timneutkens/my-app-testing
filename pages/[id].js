export default function Home(props) {
  return <pre>{JSON.stringify(props, null, " ")}</pre>;
}

export async function getServerSideProps({ params, req }) {
  return {
    props: {
      reqUrl: req.url,
      params,
    },
  };
}
