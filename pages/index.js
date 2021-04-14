import { myValue } from "../test.json";

export function getStaticProps() {
  return {
    props: {
      myValue,
    },
  };
}

export default function Hello({ props }) {
  return <h1>{props.myValue}</h1>;
}
