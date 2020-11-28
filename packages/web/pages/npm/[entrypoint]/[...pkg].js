export default function Route(props) {
  return JSON.stringify(props, null, '	');
}

export function getStaticProps({ params }) {
  return {
    props: { params },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
