export default function Route(props) {
  return JSON.stringify(props);
}

export function getStaticProps({ params }) {
  return {
    props: { params, revalidate: 10 },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { entrypoint: "types", pkg: ["graphql-request"] } }],
    fallback: true,
  };
}
