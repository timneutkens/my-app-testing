export default function Home(props) {
  return <pre>{JSON.stringify(props.params, null, " ")}</pre>;
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      params,
    },
  };
}
